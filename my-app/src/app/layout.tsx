import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body>
        <aside>

        </aside>
        <main>
          <section>
            <header>

            </header>
            
            <article></article>

            <article></article>
          </section>

          <section>
            {children}
          </section>
        </main>
      </body>
    </html>
  )
}
