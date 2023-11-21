import { useSession, signOut, signIn } from "next-auth/react";

export function Login() {
  const { data: sessionData } = useSession();

  return (
    <div className="flex w-full flex-row items-center justify-end gap-4 px-2">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>{sessionData.user?.name}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
