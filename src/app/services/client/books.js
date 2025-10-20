export const fethchBooks = async () => {
    const response = await fetch('/api/books');
    if (!response.ok) {
        throw new Error('Failed to fetch books from SERVICE');
    }
    return response.json();
};

