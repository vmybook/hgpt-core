export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            {...props}
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h4V4m12 4h-4V4M4 16h4v4m12-4h-4v4"
            />
        </svg>
    );
}
