import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="p-5 shadow-sm">
      <nav className="flex justify-between items-center">
        <Link href="/">Home</Link>
        {session && session?.user ? (
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <div className="flex items-center gap-3">
              {session?.user?.image && (
                <Image
                  src={session.user.image}
                  width={20}
                  height={20}
                  alt="User Icon"
                />
              )}

              <button type="submit">Sign Out</button>
            </div>
          </form>
        ) : (
          <form
            action={async () => {
              "use server";
              await signIn("github");
            }}
          >
            <button type="submit">Sign In</button>
          </form>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
