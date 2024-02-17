import { useMutation } from '@tanstack/react-query';
import { useAppSession } from '@/entities/user/session';
import { useInvalidateProfile } from '@/entities/user/_queries';
import { updateProfileAction } from '../_actions/update-profile';

export const useUpdateProfile = () => {
    const { update: updateSession } = useAppSession();
    const invalidateProfile = useInvalidateProfile();

    const { mutateAsync, isPending } = useMutation({
        mutationFn: updateProfileAction,
        async onSuccess({ profile }, { userId }) {
            console.log(profile);
            await invalidateProfile(userId);
            await updateSession({
                user: profile,
            });
        },
    });

    return {
        update: mutateAsync,
        isPending,
    };
};
