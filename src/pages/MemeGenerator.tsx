/* eslint-disable react-refresh/only-export-components */
import { getMeme } from "../services/apiServices";
import { useState } from "react";

export default function MemeGenerator() {
  const [generateMeme, setGenerateMeme] = useState<string>("");

  async function handleGetMeme() {
    const meme = await getMeme();
    setGenerateMeme(meme.url || "");
  }

  return (
    <div className="mx-auto mt-1 p-7 bg-slate-50/50 max-w-max rounded-3xl">
      <div className="flex flex-col items-center">
        <button className="mb-5 btn btn-primary" onClick={handleGetMeme}>
          get meme 🗿
        </button>
        {generateMeme && <img src={generateMeme} alt="" className="object-cover w-auto h-[28rem]"/>}
        {!generateMeme && (
          <button className="mb-5 btn btn-primary" onClick={handleGetMeme}>
          get meme 🗿
        </button>
        )}
      </div>
    </div>
  );
}
