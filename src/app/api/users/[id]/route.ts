import { NextResponse } from "next/server";
import { headers, cookies } from 'next/headers';

import { users } from "@app/api/users/Users";
import { User } from "@types";

export async function GET(
  req: Request,
  { params }: { params: { id: string } },
) {
  const id = params.id;
  console.log("\x1b[33m%s\x1b[0m", id);
  const headerList = headers();
  const userAgent = headerList.get('user-agent');

  const cookieList = cookies();
  const cookie = cookieList.get('TestCookie')?.value;

  let currentUser: User | null = null;

  if (id) {
    currentUser =
      users.find((user) => {
        return String(user.id) === id;
      }) || null;
  }

  return NextResponse.json({currentUser, userAgent, cookie});
}
