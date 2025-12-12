'use server';

import { z } from 'zod';
import { Invoice } from './definitions';
import { changeInvoice, fetchInvoiceById, removeInvoice, storeInvoice } from './data';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

// define invoice attributes for reading from form data and for validating values
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
  data?: FormData | null;
};
 
export async function createInvoice(prevState: State, formData: FormData) {
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      data: formData,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    };
  }

  const { customerId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
  const invoice: Invoice = {
    id: '',
    customer_id: customerId,
    amount: amountInCents,
    date: date,
    status: status
  };
  console.log(`invoice: ${JSON.stringify(invoice)}`);

  try {
    storeInvoice(invoice);
  } catch (error) {
    return {
      message: 'Error: Failed to Create Invoice.',
    };
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData,
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
      data: formData
    };
  }
 
  const { customerId, amount, status } = validatedFields.data;
 
  const oldInvoice = await fetchInvoiceById(id);
  const amountInCents = amount * 100;
 
  const invoice: Invoice = {
    id: id,
    customer_id: customerId,
    amount: amountInCents,
    date: oldInvoice!.date,
    status: status
  };
  console.log(`updated invoice: ${JSON.stringify(invoice)}`);

  try {
    changeInvoice(invoice); 
  } catch (err) {
    return {
      message: 'Error: Failed to Update Invoice.',
    }
  }
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {
  
  try {
    console.log('deleteInvoice: id = ' + id);
    await removeInvoice(id);  
  } catch (err) {
    return {
      message: "Error: Failed to delete invoice"
    }
  }
  revalidatePath('/dashboard/invoices');
  
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}