import '../styles/globals.css';
import Head from 'next/head';
import Navbar from '../components/layout/navbar';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta charset="utf-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<meta name="robots" content="index, follow" />
			</Head>
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
