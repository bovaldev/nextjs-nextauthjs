import Head from "next/head";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";
import { signIn } from "next-auth/react";

import { useRef, useState } from "react";

import { authOptions } from "./api/auth/[...nextauth]";

import ButtonPage from "@/components/UI/ButtonPage";
import Card from "@/components/UI/Card";
import ButtonAuth from "@/components/UI/Auth/ButtonAuth";
import ButtonValidate from "@/components/UI/Auth/ButtonValidate";
import ErrorMessage from "@/components/UI/Auth/ErrorMessage";
import InputAuth from "@/components/UI/Auth/InputAuth";

export default function Login() {
  const router = useRouter();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isValidating, setIsValidating] = useState(false);

  const loginHandler = async (event) => {
    event.preventDefault();

    setErrorMessage(null);
    setIsValidating(true);

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!result.error) {
      router.replace("/");
    } else {
      setErrorMessage(result.error);
      setIsValidating(false);
    }
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
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
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

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
