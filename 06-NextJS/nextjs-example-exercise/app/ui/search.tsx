'use client'; // this is a client component => use event listeners and hooks

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

/**
 * Displays a search text field with the given placeholder.
 * Also adds information about the current page number (for table pagination) and the entered search term
 * to the query string of the URL. This way the calling component can read both values.
 * 
 * Used Next.js client hooks:
 * useSearchParams- Allows you to access the parameters of the current URL. For example, the search params 
 * for this URL /dashboard/invoices?page=1&query=pending would look like this: {page: '1', query: 'pending'}.
 * 
 * usePathname - Lets you read the current URL's pathname. For example, for the route /dashboard/invoices, 
 * usePathname would return '/dashboard/invoices'.
 * 
 * useRouter - Enables navigation between routes within client components programmatically. 
 */
export default function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  // useDebouncedCallback is a hook that waits for 500ms (see last parameter) before the 
  // callback function (1st parameter) is called. Saves unnecessary data fetches.
  const handleSearch = useDebouncedCallback((term) => {
    console.log('searching: ' + term);
    const params = new URLSearchParams(searchParams);

    params.set('page', '1');
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500); // wait 500ms before calling the actual handler method 

  // create label and input which uses a defaultValue (as opposed to a react state var) 
  // populated from the search params
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={ (e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"  />
    </div>
  );
}