import Image from "next/image";

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <Image src={'/tonets_v1.png'} alt="tonets" width={120} height={100} />
    );
}
