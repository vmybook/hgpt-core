'use client';

import { Button } from '@/shared/components/ui/button';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
} from '@/shared/components/ui/card';
import { useTransition } from 'react';

export function NetsItem({
    net,
    onDelete,
}: {
    net: NetListElement;
    onDelete: () => Promise<void>;
}) {
    const [isLoadingDelete, startDeleteTransition] = useTransition();
    const handleDelete = () => {
        startDeleteTransition(async () => {
            await onDelete();
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>{net.title}</CardTitle>
                <CardDescription>{net.description}</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button disabled={isLoadingDelete} onClick={handleDelete}>
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}
