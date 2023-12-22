const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-center min-h-screen w-full bg-gradient-to-r from-primary-500 to-primary-secondary bg-cover bg-fixed bg-center">
      {children}
    </div>
  )
}

export default Layout
