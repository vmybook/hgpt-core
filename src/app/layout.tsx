import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/shared/lib/utils';
import { AppHeader } from '@/widgets/app-header/app-header';
import { ThemeProvider } from '@/features/theme/theme-provider';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export const metadata: Metadata = {
    title: 'Human GPT',
    description: 'Nets',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <ThemeProvider>
                    <AppHeader />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
