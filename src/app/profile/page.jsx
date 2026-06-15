"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "../lib/auth-client";

export default function ProfilePage() {
    const router = useRouter();
    const pathname = usePathname();

    const { data: session, isPending } = useSession();

    useEffect(() => {
        if (!isPending && !session?.user) {
            router.push(`/sign-in?redirect=${pathname}`);
        }
    }, [isPending, session, router, pathname]);

    if (isPending) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!session?.user) {
        return null;
    }

    const user = session.user;

    return (
        <section className="min-h-screen bg-transparent px-4 py-16 mt-10">
            <div className="max-w-md mx-auto bg-base-100 rounded-xl shadow-md border border-base-300 p-8 text-center">
                <Image
                    src={user.image || "https://i.pravatar.cc/300?img=5"}
                    alt={user.name || "User"}
                    width={120}
                    height={120}
                    className="w-28 h-28 rounded-full object-cover mx-auto border"
                />

                <h1 className="text-2xl font-bold mt-5">
                    {user.name || "No Name Found"}
                </h1>

                <p className="text-base-content/60 mt-2 break-all">
                    {user.email}
                </p>

                <div className="mt-6 space-y-3 text-left">
                    <div className="border border-base-300 rounded-lg p-4">
                        <p className="text-sm text-base-content/50">Name</p>
                        <p className="font-semibold mt-1">
                            {user.name || "Not provided"}
                        </p>
                    </div>

                    <div className="border border-base-300 rounded-lg p-4">
                        <p className="text-sm text-base-content/50">Email</p>
                        <p className="font-semibold mt-1 break-all">
                            {user.email}
                        </p>
                    </div>
                </div>

                <Link
                    href="/profile/update"
                    className="btn bg-green-600 text-white hover:bg-emerald-600 border-none mt-6 w-full"
                >
                    Update Profile
                </Link>
            </div>
        </section>
    );
}