import Head from 'next/head';

const PageHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/logo.svg" />
    </Head>
  );
};

export default PageHead;
