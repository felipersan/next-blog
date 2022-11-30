import Head from "next/head";

interface metaProps {
    title: string,
    description: string,
    favicon?: string
    url?: string

}

export default function MetaHead({title, description, favicon, url}:metaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:url" content={url ?? 'https://google.com'} />
      <meta property="og:type" content="website" />
      <link rel="icon" href={favicon ?? "/favicon.ico"} />
    </Head>
  );
}
