import { fetchBooks } from '@/app/services/server/books';

export async function GET() {
    try {
        const books = await fetchBooks();
        return new Response(JSON.stringify(books), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    }
    catch (error) {
        console.error("Error in GET /api/books:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch books from server' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
