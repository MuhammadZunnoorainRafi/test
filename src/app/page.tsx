import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <nav className="h-10 shadow-md px-14 flex items-center justify-between">
        <h1>Test</h1>
        <div>
          <Link
            className="px-5 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 transition-colors"
            href="/signIn"
          >
            SignIn
          </Link>
        </div>
      </nav>
    </div>
  );
}
