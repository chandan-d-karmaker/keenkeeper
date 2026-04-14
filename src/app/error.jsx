'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
const ErrorElement = ({ error, reset }) => {
    const router = useRouter();


    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                {/* Decorative Element */}
                <p className="text-6xl font-black text-indigo-600 animate-bounce">
                    !
                </p>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Something went wrong
                </h1>

                <p className="mt-6 text-base leading-7 text-gray-600 max-w-md mx-auto">
                    An unexpected error occurred. Our team has been notified and we're working on it.
                </p>

                {/* Technical Detail */}
                <p className="mt-2 text-xs font-mono text-gray-400">
                    Error Message: {error.message || "Internal Server Error"}
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button
                        onClick={() => router.back()} // Next.js equivalent to navigate(-1)
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                    >
                        Go Back
                    </button>

                    <button
                        onClick={() => reset()} // Next.js specific: tries to re-render the segment
                        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/" // Changed 'to' to 'href'
                        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-all"
                    >
                        Take me Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorElement;