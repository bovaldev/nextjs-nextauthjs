import { Plus_Jakarta_Sans } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <main
        className={`${plusJakartaSans.className} flex items-center justify-center min-h-screen p-4`}
      >
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
