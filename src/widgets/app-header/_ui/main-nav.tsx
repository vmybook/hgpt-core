import Link from 'next/link';

export function MainNav() {
    return (
        <nav className="flex items-start md:items-center gap-6 text-sm font-medium flex-col md:flex-row ">
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/hgpts/engineering"
            >
                Engineering
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/hgpts/3d"
            >
                3D
            </Link>
            <Link
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/hgpts/it"
            >
                IT
            </Link>
        </nav>
    );
}
