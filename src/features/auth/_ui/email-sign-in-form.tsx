'use client';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/shared/components/ui/form';
import { useForm } from 'react-hook-form';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { useEmailSignIn } from '../_vm/use-email-sign-in';
import { Spinner } from '@/shared/components/ui/spinner';
import { Suspense } from 'react';

export function EmailSignInForm() {
    const form = useForm<{ email: string }>({
        defaultValues: {
            email: '',
        },
    });

    const emailSignIn = useEmailSignIn();

    return (
        <Suspense>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(data =>
                        emailSignIn.signIn(data.email),
                    )}
                >
                    <div className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="sr-only">
                                        Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="name@example.com"
                                            type="email"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            disabled={emailSignIn.isPending}
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button disabled={emailSignIn.isPending}>
                            {emailSignIn.isPending && (
                                <Spinner
                                    className="mr-2 h-4 w-4"
                                    aria-label="Загрузка входа"
                                />
                            )}
                            Войти через Email
                        </Button>
                    </div>
                </form>
            </Form>
        </Suspense>
    );
}
