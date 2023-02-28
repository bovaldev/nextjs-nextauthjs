import Head from "next/head";

import ButtonPage from "@/components/UI/ButtonPage";
import Card from "@/components/UI/Card";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js x NextAuth.js</title>
        <meta
          name="description"
          content="Templat Next.js dengan NextAuth.js."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <p className="text-center">Hai, orang asing.</p>
        <ButtonPage url="/login">Masuk</ButtonPage>
      </Card>
    </>
  );
}
