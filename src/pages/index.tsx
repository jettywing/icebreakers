import Head from "next/head";
import { CreatePromptForm } from "~/components/create-prompt-form";
import { Login } from "~/components/login";

import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  const ShowPrompts = api.prompt.getAll.useQuery();

  return (
    <>
      <Head>
        <title>Break Ice</title>
        <meta name="Break Ice" content="When your convo needs a kickstart" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-around bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Login />
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Break Ice
          </h1>
          <ul className="overflow-auto">
            {ShowPrompts.data?.map((prompt) => (
              <li key={prompt.id} className="text-white">
                {prompt.opener}
              </li>
            ))}
          </ul>
        </div>
        <CreatePromptForm />
        <div>
          <small className="text-white">
            &copy; Break Ice 2023 🥶 All Rights Reserved
          </small>
        </div>
      </main>
    </>
  );
}
