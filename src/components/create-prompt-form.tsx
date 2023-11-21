import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { api } from "~/utils/api";

export function CreatePromptForm() {
  // const {user} = useUser
  const [input, setInput] = useState("");

  const { mutate } = api.prompt.create.useMutation();

  return (
    <>
      <div className="flex w-full flex-col justify-center gap-1 md:flex-row">
        <form className="mx-auto flex w-3/4 flex-col justify-center gap-2 md:w-1/2 md:flex-row">
          <input
            className="w-full rounded-md px-2 py-1"
            placeholder="What'cha thinkin?"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (input !== "") {
                  mutate({ content: input });
                }
              }
            }}
          />
          <button
            onClick={() => mutate({ content: input })}
            className="rounded-md border-2 border-white px-2 py-1 text-white"
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
}
