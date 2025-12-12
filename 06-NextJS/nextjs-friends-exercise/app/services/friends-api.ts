'use server';

import { loadArrayFromFile, saveArrayToFile } from './fileHandler';
import { Friend } from '../models/Friend';

const filePath = './data.json';

/**
 * Retrieve all friends as array of Friend objects.
 * @returns Stringified JSON representation
 */
export async function getFriends(): Promise<string> {
  const friends: Friend[] = await loadArrayFromFile<Friend>(filePath);
  console.log('> getFriends');
  return JSON.stringify(friends);
}

/**
 * Retrieve friend for given id as Friend object.
 * @returns Stringified JSON representation
 */
export async function getFriend(id: number): Promise<string> {
  const friends: Friend[] = await loadArrayFromFile<Friend>(filePath);
  console.log(`> getFriend: ${id}`);

  console.log(friends);
  const index = friends.findIndex((friend) => friend.id == id);
  if (index === -1) {
    throw new Error(`Friend with ID ${id} not found.`);
  }

  return JSON.stringify(friends[index]);
}

/**
 * Creates a new friend record from the given name and stores it.
 * Returns the new friend record.
 * @param name 
 * @returns Stringified JSON representation
 */
export async function createFriend(name: string): Promise<string> {
  const friends: Friend[] = await loadArrayFromFile<Friend>(filePath);
  console.log(`> createFriend: ${name}`);

  if (!name || typeof name !== 'string') {
    throw new Error('Name is required and should be a string.');
  }

  const newFriend = new Friend(name);
  friends.push(newFriend);
  await saveArrayToFile(filePath, friends);
  return JSON.stringify(newFriend);
}

/**
 * Updates the friend record given
 * @param friendUpdate 
 * @returns empty string (success) or error message
 */
export async function updateFriend(friendUpdate: Friend): Promise<string> {
  const friends: Friend[] = await loadArrayFromFile<Friend>(filePath);
  console.log(`> updateFriend: ${JSON.stringify(friendUpdate)}`);
  let message = '';

  const index = friends.findIndex((friend) => friend.id === friendUpdate.id);
  if (index === -1) {
    message = `Friend with ID ${friendUpdate.id} not found.`;
  } else if (!friendUpdate.name || friendUpdate.name.trim().length == 0) {
    message = 'Name is required and should be a non-empty string.';
  } else if (friendUpdate.age <= 0) {
    message = 'Age must bei > 0!';
  } else {
    friends[index].name = friendUpdate.name;
    friends[index].age = friendUpdate.age;  
    await saveArrayToFile(filePath, friends);
  }

  return message;  
}

/**
 * Deletes the friend with the given id.
 * @param id 
 * @returns 'true' on succes or 'false' if id does not exist
 */
export async function deleteFriend(id: number): Promise<string> {
  const friends: Friend[] = await loadArrayFromFile<Friend>(filePath);
  console.log(`> deleteFriend: ${id}`);
  let result = true;

  const index = friends.findIndex((friend) => friend.id === id);
  if (index === -1) {
    result = false;
  } else {
    friends.splice(index, 1);
    await saveArrayToFile(filePath, friends);  
  }

  return '' + result;
}