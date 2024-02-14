'use client';

import { AppSessionProvider } from '@/entities/user/_ui/app-session-provider';
import { ThemeProvider } from '@/features/theme/theme-provider';
import { queryClient } from '@/shared/api/query-client';
import { ComposeChildren } from '@/shared/lib/react';
import { QueryClientProvider } from '@tanstack/react-query';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <ThemeProvider />
            <AppSessionProvider />
            <QueryClientProvider client={queryClient} />
            {children}
        </ComposeChildren>
    );
}
