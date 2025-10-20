import { getColection } from '../mongo';

export async function fetchUsers() {
    const usersCollection = getColection('users');
    const users = await usersCollection.find({}).toArray();
    return users;
}