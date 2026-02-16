import { NextResponse } from 'next/server';

// Temporary in-memory storage for products
let products = [
    { id: 1, name: 'Velvet Sofa', description: 'Luxurious blue velvet sofa.', price: 899, stock: 5, category: 'Living Room', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=300' },
    { id: 2, name: 'Oak Dining Table', description: 'Solid oak table for 6.', price: 599, stock: 3, category: 'Dining Room', imageUrl: 'https://images.unsplash.com/photo-1530018607912-eff2df114f11?auto=format&fit=crop&q=80&w=300' }
];

export async function GET() {
    return NextResponse.json(products);
}

import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const description = formData.get('description');
        const price = parseFloat(formData.get('price'));
        const stock = parseInt(formData.get('stock'));
        const category = formData.get('category');
        const imageFile = formData.get('image');

        let imageUrl = '';

        if (imageFile && typeof imageFile !== 'string') {
            const bytes = await imageFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            // Create a unique filename
            const filename = `${Date.now()}-${imageFile.name}`;
            const path = join(process.cwd(), 'public/uploads', filename);
            await writeFile(path, buffer);
            imageUrl = `/uploads/${filename}`;
        }

        const newProduct = {
            id: products.length + 1,
            name,
            description,
            price,
            stock,
            category,
            imageUrl
        };

        products.push(newProduct);
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error('Error in product creation:', error);
        return NextResponse.json({ error: 'Failed to create product' }, { status: 400 });
    }
}

export async function DELETE(request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get('id'));

    if (isNaN(id)) {
        return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const initialLength = products.length;
    products = products.filter(p => p.id !== id);

    if (products.length === initialLength) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Product deleted successfully' });
}
