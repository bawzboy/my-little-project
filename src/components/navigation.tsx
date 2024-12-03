import Link from 'next/link';

export default function Navigation() {
    return (
        <div>
            <nav className="container flex space-x-4 items-center p-4">
                <Link className="text-2xl" href="/">Home</Link>
                <div className="container flex space-x-4 items-center">
                    <Link href="/archive">Archive</Link>
                    <Link href="/about">About</Link>
                </div>
            </nav>
        </div>
    );
}
