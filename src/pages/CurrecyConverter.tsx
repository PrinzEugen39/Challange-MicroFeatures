import { useState } from "react";

export default function CurrecyConverter() {
  const [currency, setCurrency] = useState("USD");
  const [convertCurrency, setConvertCurrency] = useState("IDR");
  const [money, setMoney] = useState(0);
  const [convertMoney, setConvertMoney] = useState<string>("");

  function frankfurter() {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${money}&from=${currency}&to=${convertCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setConvertMoney(`${data.rates[convertCurrency]} ${convertCurrency}`);
      });
  }

  function handleConvert() {
    if (!money) return;
    frankfurter();
  }

  return (
    <div className="max-w-3xl px-10 py-6 mx-auto mt-48 bg-white border rounded-xl border-stone-300">
      <div className="flex items-center justify-between gap-5">
        <label>Input duit :</label>
        <input
          type="text"
          className="input input-success"
          value={money}
          onChange={(e) => setMoney(Number(e.target.value))}
        />
        <select
          className="select select-success"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <p>TO</p>
        <select
          className=" select select-warning"
          onChange={(e) => setConvertCurrency(e.target.value)}
        >
          <option value="IDR">IDR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <button className="btn btn-secondary" onClick={handleConvert}>
          Convert
        </button>
      </div>
      <div className="flex items-center mt-5 gap-[50px]">
        <span>Output :</span>
        <input
          type="text"
          className="input input-success"
          value={convertMoney}
        />
      </div>
    </div>
  );
}
