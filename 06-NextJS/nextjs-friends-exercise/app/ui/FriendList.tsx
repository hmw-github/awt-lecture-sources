import Link from 'next/link';
import { deleteFriend } from '../services/friends-api';
import { Friend } from '../models/Friend';
import { ReactNode } from 'react';

import "./FriendList.css";

interface FriendListProps {
  friends: Friend[]; // List of friends to display
  onDelete: () => void; // Callback function to refresh the list
}

export default function FriendList({ friends, onDelete }: FriendListProps) {

  const handleDelete = async (id: number) => {
    const res: string = await deleteFriend(id);
    const ok: boolean = JSON.parse(res);
    if (ok) 
      onDelete(); // Refresh the list after deletion
  };

  let list: ReactNode;
  if (friends.length > 0) {
    list = friends
    .sort((f1, f2) => f1.name.localeCompare(f2.name))
    .map((friend) => {
      

      return (
        <li key={friend.id} className="friend">
          <span className="friend-name">{friend.name} {ageIfSet}</span>
          <Link href={`/details/${friend.id}/edit`} className="button">edit</Link>
          <button onClick={() => handleDelete(friend.id)} className="button">
            delete
          </button>
        </li>
      )
    });
  } else {
    
  }

  return (
    <ul className="friend-list">
      { list }
    </ul>
  );
}