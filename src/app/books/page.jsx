'use client';
import React, { useState, useEffect } from 'react';
import { fethchBooks } from '@/app/services/client/books';

function BooksPage() {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadBooks = async () => {
            try {
                const data = await fethchBooks();
                setBooks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadBooks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Books</h1>
            <ul>
                {books.map((book, idx) => (
                    <li key={idx}>{book.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default BooksPage;