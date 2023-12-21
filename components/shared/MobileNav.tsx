import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"


const MobileNav = () => {
  
  return (
    <nav className="md:hidden ">
      <Sheet>
        <SheetTrigger className="align-middle ">
          <Image 
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer dark:invert dark:filter dark:grayscale"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden dark:bg-dark-2 dark:text-light-1 dark:border-dark-2">
          <div className="w-36 flex-center gap-2 ">
            <Image 
              src="/assets/images/logo.png" width={32} height={32}
              alt="Events Ally logo" 
            />
            <span className="ml-2 bg-gradient-to-r from-primary-500 to-primary-secondary text-transparent bg-clip-text font-semibold">
              Events Ally
            </span>
          </div>
          <Separator className="border border-gray-50 dark:border-primary-500" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNav