import { useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home() {

  const {data: session} = useSession()

  if(!session) return <Login/>

  return (
    <div>
      <Head>
        <title>twitter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <main className="relative max-w-[1400px] mx-auto">
      <Sidebar />
      <Feed />
     </main>
    </div>
  );
}
