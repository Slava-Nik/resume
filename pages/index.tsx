import Head from 'next/head';
import Resume from '../components/Resume';
import {getPublicURL} from '../utils/common';

export default function Home() {
  return (
    <>
      <Head>
        I<title>Slava Nikolaevich | Resume</title>
        <meta name='description' content='Senior Front-end & Back-end Engineer. Slava Nikolaevich, PDF resume' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href={getPublicURL('/favicon.png')} />
        {/*<link rel="preload" as="image" href={getPublicURL('/author.jpg')} />*/}
      </Head>
      <div className='app'>
        <Resume />
      </div>
    </>
  );
}
