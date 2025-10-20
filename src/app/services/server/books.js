import { client } from '@/app/services/server/mongo';

export async function fetchBooks() {
    const res = client.db("db").collection("books");
    const books = await res.find({}).toArray();
    return books;
}
