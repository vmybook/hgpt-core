import { AppHeader } from '@/app/_widgets/app-header/app-header';

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <AppHeader variant="auth" />
            {children}
        </>
    );
}
