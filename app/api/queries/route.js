import { NextResponse } from 'next/server';

// Temporary in-memory storage for queries
let queries = [
  { id: 1, name: 'John Doe', email: 'john@example.com', message: 'I am interested in the velvet sofa.', status: 'pending', date: new Date().toISOString() },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Do you have dining tables in stock?', status: 'replied', date: new Date().toISOString() }
];

export async function GET() {
  return NextResponse.json(queries);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newQuery = {
      id: queries.length + 1,
      ...body,
      status: 'pending',
      date: new Date().toISOString()
    };
    queries.push(newQuery);
    return NextResponse.json(newQuery, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create query' }, { status: 400 });
  }
}
