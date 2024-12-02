import Link from 'next/link';

export default function Navigation() {
    return (
        <div>
            <nav className="container relative flex space-x-4 items-center p-4">
                <Link className="text-2xl" href="/">Home</Link>
                <div>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </div>
    );
}
