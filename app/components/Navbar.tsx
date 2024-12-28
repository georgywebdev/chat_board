import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  console.log("session", session);

  return (
    <header>
      <Link href="/">Home</Link>
      <div>
        {session && session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">Signin</button>
          </form>
        )}
      </div>
    </header>
  );
};

export default Navbar;
