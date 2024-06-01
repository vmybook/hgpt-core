import { AuthorizatoinError } from '@/shared/lib/errors';
import { SessionEntity, UserEntity, UserId } from '../_domain/types';
import { createUserAbility } from '../_domain/ability';
import { userRepository } from '../_repositories/user';

type GetUser = {
    userId: UserId;
    session: SessionEntity;
};

export class GetUserService {
    async exec({ userId, session }: GetUser): Promise<UserEntity> {
        const userAbility = createUserAbility(session);

        if (!userAbility.canGetUser(userId)) {
            throw new AuthorizatoinError();
        }

        return await userRepository.getUserById(userId);
    }
}

export const getUserService = new GetUserService();
