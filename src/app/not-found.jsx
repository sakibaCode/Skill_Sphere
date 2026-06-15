import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="max-w-md text-center bg-base-100 border border-base-300 rounded-xl shadow-md p-8">
        <h1 className="text-7xl font-bold text-green-600">404</h1>

        <h2 className="text-2xl font-bold mt-4">
          Page Not Found
        </h2>


        <Link
          href="/"
          className="btn bg-green-600 text-white hover:bg-emerald-600 border-none mt-6"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}