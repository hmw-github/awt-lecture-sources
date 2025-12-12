'use client';

import { useState } from 'react';
import { createFriend } from '../services/friends-api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddFriendForm() {
  const [name, setName] = useState<string>(''); // State to manage the input field
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res: string = await createFriend(name);
    const newFriend = JSON.parse(res);
    
    console.log(`Created friend: ${JSON.stringify(newFriend)}`);
    router.push('/');
  };

  return (
    <div className="container">
      <h1>Add a friend</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row mb-30">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className="form-row">
          <div className="hbox">
            <button type="submit" className="button">save</button>
            <Link href="/" className="button">cancel</Link>
          </div>
        </div>
      </form>
    </div>
  );
}