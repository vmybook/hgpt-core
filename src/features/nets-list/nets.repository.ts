import { dbClient } from '@/shared/lib/db';
import { cache } from 'react';

class NetsRepository {
    getNetsList = cache(
        (): Promise<NetListElement[]> => dbClient.net.findMany(),
    );

    createNetElement = (
        command: CreateNetListElementCommand,
    ): Promise<NetListElement> => {
        return dbClient.net.create({
            data: command,
        });
    };

    deleteNetElement = (command: DeleteNetListElementCommand) => {
        return dbClient.net.delete({
            where: { id: command.id },
        });
    };
}

export const netsRepository = new NetsRepository();
