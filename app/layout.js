import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider'


export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body>
          <div className='main'>
            <div className='gradiant' />
          </div>

          <main className='app'>
            <Nav />
            {children}
          </main>
        </body>
      </Provider>

    </html>
  )
}
