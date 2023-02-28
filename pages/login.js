import Head from "next/head";

import { useRef, useState } from "react";

import ButtonPage from "@/components/UI/ButtonPage";
import Card from "@/components/UI/Card";
import ButtonAuth from "@/components/UI/Auth/ButtonAuth";
import ButtonValidate from "@/components/UI/Auth/ButtonValidate";
import InputAuth from "@/components/UI/Auth/InputAuth";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isValidating, setIsValidating] = useState(false);

  const loginHandler = async (event) => {
    event.preventDefault();

    setIsValidating(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    console.log(email, password);

    setIsValidating(false);
  };

  return (
    <>
      <Head>
        <title>Masuk - Next.js x NextAuth.js</title>
        <meta
          name="description"
          content="Templat Next.js dengan NextAuth.js, halaman Masuk."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <h2 className="font-bold text-center text-xl">MASUK</h2>
        <form className="flex flex-col gap-2 mt-4" onSubmit={loginHandler}>
          <InputAuth
            name="Email"
            placeholder="boval@mail.com"
            ref={emailRef}
            type="email"
          />
          <InputAuth
            name="Kata Sandi"
            placeholder="******"
            ref={passwordRef}
            type="password"
          />
          {isValidating ? <ButtonValidate /> : <ButtonAuth>Masuk</ButtonAuth>}
        </form>
        <ButtonPage url="/signup">Daftar</ButtonPage>
      </Card>
    </>
  );
}
