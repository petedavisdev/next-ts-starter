import { ExampleCard } from 'src/components/ExampleCard/ExampleCard';
import Head from 'next/head';

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>Next TypeScript Starter</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<h1 className="title">Next TypeScript Starter</h1>

				<section className="grid">
					<ExampleCard to="https://nextjs.org/docs" title="Documentation">
						<p>Find in-depth information about Next.js features and API.</p>
					</ExampleCard>

					<ExampleCard to="https://nextjs.org/learn" title="Learn">
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</ExampleCard>

					<ExampleCard to="https://github.com/vercel/next.js/tree/canary/examples" title="Examples">
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</ExampleCard>

					<ExampleCard to="https://vercel.com/new" title="Deploy">
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</ExampleCard>
				</section>
			</main>
		</div>
	);
}

