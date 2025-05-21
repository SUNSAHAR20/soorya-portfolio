import './globals.css'
import Navbar from '../components/Navbar' // Assuming Navbar will be in src/components

export const metadata = {
  title: 'Soorya Sahar - Portfolio',
  description: 'Software Engineer Portfolio for Soorya Sahar',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Dark mode state will need to be managed here or via a context provider later */}
        {/* For now, Navbar is included directly. Actual dark mode toggle will be a client component. */}
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
