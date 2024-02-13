'use client';

import { Button } from '@/shared/components/ui/button';
import { Spinner } from '@/shared/components/ui/spinner';
import { Github } from 'lucide-react';
import { ClientSafeProvider } from 'next-auth/react';
import { useOAuthSignIn } from '../_vm/use-oauth-sign-in';
import { Suspense } from 'react';

export function ProviderButton({ provider }: { provider: ClientSafeProvider }) {
    const oauthSignIn = useOAuthSignIn(provider);

    const getIcon = (provider: ClientSafeProvider) => {
        switch (provider.id) {
            case 'github':
                return <Github className="mr-2 h-4 w-4" />;
            default:
                return null;
        }
    };

    return (
        <Suspense>
            <Button
                variant="outline"
                type="button"
                disabled={oauthSignIn.isPending}
                onClick={() => oauthSignIn.signIn()}
            >
                {oauthSignIn.isPending ? (
                    <Spinner className="mr-2 h-4 w-4" aria-label="Вход" />
                ) : (
                    getIcon(provider)
                )}
                {provider.name}
            </Button>
        </Suspense>
    );
}
