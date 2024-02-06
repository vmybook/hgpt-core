import { revalidatePath } from 'next/cache';
import { netsRepository } from '../nets.repository';
import { NetsItem } from '../ui/nets-item';

export async function NetsList({
    revalidatePagePath,
}: {
    revalidatePagePath: string;
}) {
    const netsList = await netsRepository.getNetsList();

    const handleDeleteAction = async (netId: string) => {
        'use server';

        await netsRepository.deleteNetElement({ id: netId });
        revalidatePath(revalidatePagePath);
    };

    return (
        <div className="flex flex-col gap-3">
            {netsList.map(net => (
                <NetsItem
                    key={net.id}
                    net={net}
                    onDelete={handleDeleteAction.bind(null, net.id)}
                />
            ))}
        </div>
    );
}
