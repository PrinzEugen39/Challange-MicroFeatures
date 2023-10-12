import { useEffect, useState } from "react";

interface Heroes {
  hero_name: string;
  hero_role: string;
  hero_specially: string;
}

export default function MobilLegend() {
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
        <h1 className="text-xl text-semibold ">Daftar Hero</h1>
        <input
          placeholder="Search hero..."
          className="w-full max-w-xs input input-bordered "
          value={filtered}
          onChange={(e) => setFiltered(e.target.value)}
        />
        <p>🗿 {hero.length} heroes found 🗿</p>
      </div>
      <div className="flex justify-center gap-2">
        <button className="btn btn-primary">Search</button>
        <button className="btn btn-primary">Reset</button>
      </div>
      <ul>
        {searchResults.map((data) => (
          <li className="p-3">
            <div className="shadow-xl card w-96 bg-base-100">
              <div className="card-body">
                <h2 className="card-title">
                  {data.hero_name}
                  <div className="badge badge-secondary">{data.hero_role}</div>
                </h2>
                <div className="justify-end card-actions">
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
  )
}
