'use server';

import DetailsForm from "@/app/ui/DetailsForm";
import { getFriend } from "@/app/services/friends-api";

export default async function EditDetails(
    { params }: { params: { id: string } }) {
  console.log('invoice id = ' + params.id);
  const id = params.id;
  const friend = JSON.parse(await getFriend(Number(id)));
  console.log('friend = ' + JSON.stringify(friend));

  return (
    <DetailsForm friend={friend} />
  );
};