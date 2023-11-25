import { Sidebar } from './src/components/sidebar/Sidebar'
import './src/styles/globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='flex'>
        <Sidebar />
        <main className='bg-neutral-100 dark:bg-neutral-800 w-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
