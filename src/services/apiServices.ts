export async function getMobileLegend() {
  const res = await fetch("https://api.dazelpro.com/mobile-legends/hero");

  if (!res.ok) throw Error("Failed getting hero");

  const data = await res.json();
  return data;
}

export async function getMeme() {
  const res = await fetch("https://meme-api.com/gimme");

  if (!res.ok) throw Error("Failed getting meme");

  const data = await res.json();
  return data;
}