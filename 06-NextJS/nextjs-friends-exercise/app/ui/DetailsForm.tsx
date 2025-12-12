'use client';

import { Friend } from "../models/Friend";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateFriend } from "../services/friends-api";

export default function DetailsForm({ friend }: { friend: Friend; }) {
  console.log('DetailsForm - friend = ' + JSON.stringify(friend));

  const [age, setAge] = useState(friend.age);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSave = async (event: any) => {
    event.preventDefault();

    // call server endpoint to update the friend record
    // evaluate result and display error message or goto "home" using router
    
  };

  const handleCancel = () => {
    // use router to goto '/'
    
  };

  const changeAge = (value: any) => {
    setAge(value);
  };

  if (age == -1) {
    setAge(0);
  }

  return (
    <form className="container">
      <h2>Edit Friend</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          value={friend.name}
          readOnly/>
      </div>
      <div  className="form-row">
        <label htmlFor="age" className="form-label">Age</label>
        <input type="number" id="age" required defaultValue={age}
          onChange={(e) => changeAge(e.target.value)}/>
      </div>
      <div className="form-row error-message mb-30">
        {message ? 'Error: ' + message : ''}
      </div>
      <div className="form-row">
        <div className="hbox">
          <button type="button" className="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="button"  onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}