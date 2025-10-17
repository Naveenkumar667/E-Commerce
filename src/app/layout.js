import './globals.css'
import ReduxProvider from './components/ReduxProvider'

export const metadata = {
  title: 'E-Commerce Store',
  description: 'Your one-stop shop for all products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <nav className="navbar">
            <div className="nav-container">
              <h1 className="logo">MangaVerse</h1>
              <div className="nav-links">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/products">Products</a>
                <a href="/cart">Cart</a>
                <a href="/feedback">Feedback</a>
                <a href="/signin">Sign In</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
          </nav>
          <main className="main-content">
            {children}
          </main>
        </ReduxProvider>
      </body>
    </html>
  )
}