import { CreateNetForm } from '@/features/nets-list/pub/create_net_form';
import { NetsList } from '@/features/nets-list/pub/nets-list';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col p-8">
            <CreateNetForm revalidatePagePath="/" className="max-w-[300px] mb-10" />
            <NetsList revalidatePagePath="/" />
        </main>
    );
}
