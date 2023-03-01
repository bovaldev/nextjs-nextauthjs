import Head from "next/head";
import { useRouter } from "next/router";
import { getServerSession } from "next-auth/next";

import { useRef, useState } from "react";

import { authOptions } from "./api/auth/[...nextauth]";

import ButtonPage from "@/components/UI/ButtonPage";
import Card from "@/components/UI/Card";
import ButtonAuth from "@/components/UI/Auth/ButtonAuth";
import ButtonValidate from "@/components/UI/Auth/ButtonValidate";
import ErrorMessage from "@/components/UI/Auth/ErrorMessage";
import InputAuth from "@/components/UI/Auth/InputAuth";

export default function SignUp() {
  const router = useRouter();

  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isValidating, setIsValidating] = useState(false);

  const comparePasswordHandler = () => {
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    if (passwordConfirmation !== password) {
      setIsPasswordMatch(false);
    } else {
      setIsPasswordMatch(true);
    }
  };

  const signUpHandler = async (event) => {
    event.preventDefault();

    setErrorMessage(null);
    setIsValidating(true);

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = passwordRef.current.value;
    const passwordConfirmation = passwordConfirmationRef.current.value;

    if (passwordConfirmation !== password) {
      setErrorMessage("Kata sandi tidak cocok.");
      setIsValidating(false);

      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    });
    const data = await response.json();

    if (response.status === 201) {
      alert(data.message);
      router.replace("/login");
    } else {
      setErrorMessage(data.message);
      setIsValidating(false);
    }
  };

  return (
    <>
      <Head>
        <title>Daftar - Next.js x NextAuth.js</title>
        <meta
          name="description"
          content="Templat Next.js dengan NextAuth.js, halaman Daftar."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Card>
        <h2 className="font-bold text-center text-xl">DAFTAR</h2>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <form className="flex flex-col gap-2 mt-4" onSubmit={signUpHandler}>
          <InputAuth
            name="Nama"
            placeholder="Boval"
            ref={nameRef}
            type="text"
          />
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
            comparePassword={comparePasswordHandler}
          />
          <InputAuth
            name="Konfirmasi Kata Sandi"
            placeholder="******"
            ref={passwordConfirmationRef}
            type="password"
            comparePassword={comparePasswordHandler}
          />
          {!isPasswordMatch && (
            <p className="text-red-700 text-xs">Kata sandi tidak cocok.</p>
          )}
          {isValidating ? <ButtonValidate /> : <ButtonAuth>Daftar</ButtonAuth>}
        </form>
        <ButtonPage url="/login">Masuk</ButtonPage>
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
