import { NextResponse } from 'next/server';
import { users } from '@app/api/users/Users';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get('q');

  console.log('\x1b[33m%s\x1b[0m', query);

  let currentUsers = users;

  if (query) {
    currentUsers = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
  }

  return NextResponse.json(currentUsers);
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log('\x1b[35m%s\x1b[0m', body);

  return NextResponse.json(body);
}
