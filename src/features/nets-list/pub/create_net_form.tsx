'use client';

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
} from '@/shared/components/ui/form';
import { Input } from '@/shared/components/ui/input';
import { Textarea } from '@/shared/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { createNetAction } from '../actions';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

const CreateNetFormSchema = z.object({
    title: z.string(),
    description: z.string(),
});

export function CreateNetForm({
    className,
    revalidatePagePath,
}: {
    className?: string,
    revalidatePagePath: string;
}) {
    const [isCreateTransition, startCreateTransition] = useTransition();
    const form = useForm({
        resolver: zodResolver(CreateNetFormSchema),
        defaultValues: {
            title: '',
            description: '',
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(data => {
                    startCreateTransition(async () => {
                        createNetAction(data, revalidatePagePath);
                    });
                })}
                className={cn(className, "space-y-8")}
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title..." {...field} />
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Description..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" disabled={isCreateTransition}>
                    Save
                </Button>
            </form>
        </Form>
    );
}
