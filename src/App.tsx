//https://api.dazelpro.com/mobile-legends/hero

import { useEffect, useState } from "react";

interface Heroes {
  hero_name: string;
  hero_role: string;
  hero_specially: string;
}

export default function App() {
  const [hero, setHero] = useState<Heroes[]>([]);
  const [filtered, setFiltered] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Heroes[]>([]);

  

  async function mobileLegend() {
    try {
      const res = await fetch("https://api.dazelpro.com/mobile-legends/hero");
      const data = await res.json();
      const heroesArray: Heroes[] = Object.values(data.hero);
      setHero(heroesArray);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    mobileLegend();
    const results =
      filtered.length > 0
        ? hero.filter((post) =>
            `${post.hero_name} ${post.hero_role}`
              .toLowerCase()
              .includes(filtered.toLowerCase())
          )
        : hero;
    setSearchResults(results);
  }, [filtered, hero]);

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-semibold text-xl ">Daftar Hero</h1>
        <input
          placeholder="Search hero..."
          className="input input-bordered w-full max-w-xs "
          value={filtered}
          onChange={(e) => setFiltered(e.target.value)}
        />
        <p>🗿 {hero.length} heroes found 🗿</p>
      </div>
      <div className="flex gap-2 justify-center">
        <button className="btn btn-primary" >Search</button>
        <button className="btn btn-primary" >Reset</button>
      </div>
      <ul>
        {searchResults.map((data) => (
          <li className="p-3">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">
                  {data.hero_name}
                  <div className="badge badge-secondary">{data.hero_role}</div>
                </h2>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    {data.hero_specially}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
