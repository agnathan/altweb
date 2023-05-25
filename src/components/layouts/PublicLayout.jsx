import Head from 'next/head'
import { Header } from '../Header'
import { Footer } from '../Footer'

export function PublicLayout({ children }) {
    return (
        <>
            <Head>
                <title>Alternative Investing Club</title>
                <meta
                    name="description"
                    content="Learn from a community of busy people investing and creating a culture of ownership"
                />
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}