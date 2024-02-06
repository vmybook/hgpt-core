'use server';

import { revalidatePath } from 'next/cache';
import { netsRepository } from './nets.repository';

export const createNetAction = async (
    command: CreateNetListElementCommand,
    revalidatePagePath: string,
) => {
    await netsRepository.createNetElement(command);
    revalidatePath(revalidatePagePath);
};
