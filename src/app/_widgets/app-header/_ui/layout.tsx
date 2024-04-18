import { Button } from '@/shared/components/ui/button';
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
} from '@/shared/components/ui/sheet';
import { Menu } from 'lucide-react';

export function Layout({
    logo,
    nav,
    profile,
    actions,
}: {
    logo?: React.ReactNode;
    nav?: React.ReactNode;
    profile?: React.ReactNode;
    actions?: React.ReactNode;
}) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
            <div className="flex px-6 h-14 items-center">
                <div className="md:hidden mr-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader className=" border-b pb-5 mb-5">
                                {logo}
                            </SheetHeader>
                            {nav}
                        </SheetContent>
                    </Sheet>
                </div>

                <div className="mr-4 hidden md:flex">{logo}</div>
                
                <div className="hidden md:flex items-center flex-1 justify-center">{nav}</div>

                <div className="items-center flex">
                    <div className="flex items-center justify-end space-x-3 ">
                        {actions}
                        {profile}
                    </div>
                </div>
            </div>
        </header>
    );
}
