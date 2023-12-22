import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"
import ThemeSwitcher from "./ThemeSwitcher"

const Header = () => {
  return (
    <header className="w-full border-b dark:bg-dark-1 dark:border-dark-3">
      <div className="wrapper flex items-center justify-between ">
        <Link href="/" className="w-36 flex-center gap-2">
          <Image 
            src="/assets/images/logo.png" width={32} height={32}
            alt="Events Ally logo" 
          />
           <span className="bg-gradient-to-r from-primary-500 to-primary-secondary text-transparent bg-clip-text font-semibold">
            Events Ally
           </span>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs dark:text-light-1">
            <NavItems />
          </nav>
        </SignedIn>

        

        <div className="flex items-center justify-end gap-x-3 ">

        <ThemeSwitcher/>
        
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Entrar
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header