import type { AppProps } from 'next/app'
import GlobalStyles from './globalstyles';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyles />
            <Component {...pageProps} />
        </>
    )
}