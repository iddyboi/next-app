import Head from "next/head";
import Profile from "../components/Profile/Profile";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Profile />
    </>
  );
}
