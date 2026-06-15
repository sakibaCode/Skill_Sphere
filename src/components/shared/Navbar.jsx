"use client";

import { useAuth } from "@/components/shared/SessionProvider";
import { signOut } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const { data: session, isPending } = useAuth();
  const router = useRouter();
  const user = session?.user;

  async function handleSignOut() {
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }

  return (
    <div className="navbar sticky top-0 z-50 bg-[#f5f0e8] shadow-sm px-4 md:px-8">
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Skill<span className="text-green-700">Sphere</span>
        </Link>
      </div>

      {/* Desktop nav */}
      <div className="navbar-end hidden lg:flex items-center gap-2">
        <ul className="menu menu-horizontal gap-1">
          <li>
            <Link href="/" className="font-semibold">Home</Link>
          </li>
          <li>
            <Link href="/courses" className="font-semibold">Courses</Link>
          </li>
        </ul>

        {isPending ? (
          <span className="loading loading-spinner loading-sm"></span>
        ) : user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar placeholder"
            >
              <div className="bg-green-700 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm">
                {user.name?.charAt(0).toUpperCase() || "U"}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-44"
            >
              <li className="menu-title">
                <span className="text-xs text-gray-500">{user.email}</span>
              </li>
              <li>
                <Link href="/profile">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleSignOut} className="text-red-600">
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link
            href="/sign-up"
            className="btn btn-sm bg-green-700 text-white border-none hover:bg-green-800"
          >
            Join Us
          </Link>
        )}
      </div>

      {/* Mobile nav */}
      <div className="navbar-end lg:hidden">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-3 shadow bg-[#f5f0e8] rounded-box w-44"
          >
            <li>
              <Link href="/" className="font-semibold">Home</Link>
            </li>
            <li>
              <Link href="/courses" className="font-semibold">Courses</Link>
            </li>
            {isPending ? null : user ? (
              <>
                <li>
                  <Link href="/dashboard" className="font-semibold">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="font-semibold text-red-600 text-left"
                  >
                    Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/sign-up"
                  className="font-semibold text-green-700"
                >
                  Join Us
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
