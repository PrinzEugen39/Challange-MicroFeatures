/* eslint-disable react-refresh/only-export-components */
import { useState } from "react";
import { getMobileLegend } from "../services/apiMobilLegend";
import { useLoaderData } from "react-router-dom";

interface Heroes {
  hero_id: number;
  hero_name: string;
  hero_role: string;
  hero_specially: string;
}

interface ApiResponse {
  success: boolean;
  status: number;
  rowCount: number;
  message: string;
  hero: Heroes[];
}

export async function loader() {
  const hero = await getMobileLegend();
  return hero;
}

export default function MobilLegend() {
  const hero = useLoaderData() as ApiResponse;

  const heroesArray: Heroes[] = Object.values(hero.hero);
  const [filtered, setFiltered] = useState<string>("");

  const results =
    filtered.length > 0
      ? heroesArray.filter((post) =>
          `${post.hero_name} ${post.hero_role}`
            .toLowerCase()
            .includes(filtered.toLowerCase())
        )
      : heroesArray;

  return (
    <div className="mx-auto mt-1 p-7 bg-slate-50/50 max-w-max rounded-3xl">
      <div className="flex flex-col items-center">
        <h1 className="text-xl text-semibold ">Daftar Hero</h1>
        <input
          placeholder="Search hero..."
          className="w-full max-w-xs input input-bordered "
          value={filtered}
          onChange={(e) => setFiltered(e.target.value)}
        />
        <p>🗿 {results.length} heroes found 🗿</p>
      </div>
      <div className="mx-auto mt-3 max-w-max">
        <ul className="w-full h-[65vh] list-none overflow-y-auto flex flex-col gap-2">
          {results.map((data) => (
            <li className="p-3" key={data.hero_id}>
              <div className="shadow-xl card w-96 bg-base-100">
                <div className="card-body">
                  <h2 className="card-title ">
                    {data.hero_name}
                    <div className="card-actions">
                      <div className="badge badge-secondary">
                        {data.hero_role}
                      </div>
                      <div className="badge badge-outline">
                        {data.hero_specially}
                      </div>
                    </div>
                  </h2>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
