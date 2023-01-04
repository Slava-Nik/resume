import Head from 'next/head';
import Resume from '../components/Resume';

export default function Home() {
  return (
    <>
      <Head>
        <title>Slava Nikolaevich | Resume</title>
        <meta name="description" content="Slava Nikolaevich PDF resume project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
        <div className="app">
            <Resume/>
        </div>
    </>
  );
}
