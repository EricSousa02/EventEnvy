import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col dark:bg-dark-1">
      <Header />
      <main className="flex-1 dark:bg-dark-1">{children}</main>
      <Footer />
    </div>
  )
}
