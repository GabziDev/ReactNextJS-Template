import './globals.css'

export const metadata = {
  title: 'GabzDEV Template',
  description: 'Template ReactJS & NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
