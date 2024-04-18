
import { LogoIcon } from "@/shared/components/ui/logo-icon";
import Link from "next/link";

export function Logo() {
  return (
    <Link className="flex items-center space-x-2" href="/">
      <LogoIcon className="h-6 w-6" />
    </Link>
  );
}