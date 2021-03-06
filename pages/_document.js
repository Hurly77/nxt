import Document, {
	Html,
	Head,
	Main,
	NextScript,
} from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(
			ctx,
		);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.15.4/css/solid.css"
						integrity="sha384-Tv5i09RULyHKMwX0E8wJUqSOaXlyu3SQxORObAI08iUwIalMmN5L6AvlPX2LMoSE"
						crossorigin="anonymous"
					/>
					<link
						rel="stylesheet"
						href="https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css"
						integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
						crossorigin="anonymous"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
