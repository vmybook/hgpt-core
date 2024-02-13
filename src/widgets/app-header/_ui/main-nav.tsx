import { buttonVariants } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';

export function MainNav() {
    return (
        <nav>
            <div className="mx-auto lg:max-w-none">
                <div className="flex items-center justify-between">
                    <div className="">
                        <div className="flex h-14 sm:justify-center">
                            <div className="hidden z-50 lg:ml-4 lg:block items-center">
                                <div className="flex h-full">
                                    <div className="relative flex items-center">
                                        <Link
                                            href={'#'}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'text-md font-light',
                                            )}
                                        >
                                            Популярные
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden z-50 lg:block items-center">
                                <div className="flex h-full">
                                    <div className="relative flex items-center">
                                        <Link
                                            href={'#'}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'text-md font-light',
                                            )}
                                        >
                                            Категории
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden z-50 lg:block items-center">
                                <div className="flex h-full">
                                    <div className="relative flex items-center">
                                        <Link
                                            href={'#'}
                                            className={cn(
                                                buttonVariants({
                                                    variant: 'ghost',
                                                }),
                                                'text-md font-light',
                                            )}
                                        >
                                            Блог
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
