import { Inter } from 'next/font/google';
import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TodoApp- JMYC',
  description: 'Daily task list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
