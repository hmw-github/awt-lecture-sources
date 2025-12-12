"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getFriends } from "@/app/services/friends-api";
import FriendList from "./FriendList";
import { Friend } from "../models/Friend";

import "./Home.css";

export default function Home() {
  const [friends, setFriends] = useState<Friend[]>([]);

  const fetchFriends = async () => {
    const friendsJSON = await getFriends();
    setFriends(JSON.parse(friendsJSON));
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <div className="container">
      <div className="vbox">
        <h1>My Friends</h1>
        <Link href="/add-friend" className="button plus-button mb-30">+</Link>
        <FriendList friends={friends} onDelete={fetchFriends} />
      </div>
    </div>
  );
}