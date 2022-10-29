import { useSession } from "next-auth/react";
import React, { useState } from "react";

const Input = () => {
  const [loading, isLoading] = useState(false);
  const [input, setInput] = useState("");
  const { data: session } = useSession();
  return (
    <div className={`mt-4 px-4 ${loading && "opacity-60"}`}>
      <div className="grid grid-cols-[48px,1fr] gap-4">
        <div>
          <img
            src={session?.user?.image}
            alt=""
            className="h-12 w-12 rounded-full object-contain"
          />
        </div>
        <div>
          <textarea
            className="w-[100%] bg-transparent outline-none text-[20px]"
            rows="2"
            placeholder="What's Happening?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
