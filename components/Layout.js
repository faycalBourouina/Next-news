import Link from 'next/link';
import Head from 'next/head';

export default ({ children }) => {
	return (
			<div>
				<Head>
					<title>Static title </title>
					<meta name="description" content="app made with Next" />
				</Head>
				<div className="container">
					<nav>
						<Link href="/">
							<span className="main-title"> <a> Hacker news</a> </span>
						</Link>
					</nav>
			
					{ children }

					<style jsx> {`
						.container {
							max-width: 800px,
							margin: 0 auto;
							background: #f6f6ef;
						}
						nav {
							background: #f60;
							padding: 1em;
						}
						nav > * {
							display: inline-block;
							color: black;
						}
						nav a {
							text-decoration: none;
						}
						nav .main-title {
							font-weight: bold;
						}
					`} </style>
					<style global jsx> {`
						body {
							background: white;
							font-family: verdana, geneva, sans-serif;
						}
					`} </style>

				</div>
			</div>
		)
}