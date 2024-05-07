import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

const OpenForm = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src="/assets/menu.svg" alt="Menu" width={32} height={32} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-white-1">
        <DropdownMenuLabel
          className="bg-blue-2 text-blue-4 font-medium hover:font-semibold"
          style={{ fontFamily: "Courier Prime" }}
        >
          <Link href="/admin">Create New Source</Link>
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem></DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OpenForm;
