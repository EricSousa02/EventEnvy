import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t dark:border-dark-3 dark:bg-dark-1">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="flex-center gap-2">
          <Image 
            src="/assets/images/logo.png" width={32} height={32}
            alt="Events Ally logo" 
          />
           <span className="bg-gradient-to-r from-primary-500 to-primary-secondary text-transparent bg-clip-text font-semibold">
            Events Ally
           </span>
        </Link>

        <p className="dark:text-light-1">2023 Events Ally. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer