import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "../auth/[...nextauth]/route";

export async function GET() {
  var session;
  try {
    session = await getServerSession(authOptions);
  }
  catch (error) {
    console.error(error);
  }

  console.log("Session", session);
  console.log("Session User", session?.user);
  

  
  return NextResponse.json({ name: session?.user?.name ?? "Not Logged In" });
}