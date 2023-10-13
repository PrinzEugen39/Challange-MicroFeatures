import { Equal, MinusSquare, PlusSquare } from "lucide-react";
import { useState } from "react";

export default function SalaryCalculator() {
  const [basicSalary, setBasicSalary] = useState<number>(0);
  const [allowance, setAllowance] = useState<number>(0);
  const [obligation, setObligation] = useState<number>(0);
  const [grossSalary, setGrossSalary] = useState<number>(0);
  const [netSalary, setNetSalary] = useState<number>(0);

  const handleClickCount = () => {
    const grossSal = basicSalary + allowance;
    const netSal = grossSal - obligation;

    setGrossSalary(grossSal);
    setNetSalary(netSal);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-6 ">
      <div className="flex flex-col gap-4 px-10 py-16 rounded-2xl bg-slate-100/50">
        <div className="mb-3 text-center">
          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Salary Calculator
          </span>
        </div>
        <div className=" flex flex-grow max-w-[720px]">
          <input
            type="text"
            className="w-full px-4 py-1 text-lg border rounded-l-full shadow-inner outline-none shadow-gray-400"
            value={basicSalary}
            onChange={(e) => setBasicSalary(Number(e.target.value))}
          />
          <button className="flex-shrink-0 px-4 py-2 border border-l-0 border-gray-400 rounded-r-full bg-stone-100 btn btn-outline">
            <PlusSquare />
          </button>
        </div>

        <div className=" flex flex-grow max-w-[600px]">
          <input
            type="text"
            className="w-full px-4 py-1 text-lg border rounded-l-full shadow-inner outline-none shadow-gray-400"
            value={allowance}
            onChange={(e) => setAllowance(Number(e.target.value))}
          />
          <button className="flex-shrink-0 px-4 py-2 border border-l-0 border-gray-400 rounded-r-full bg-stone-100 btn btn-outline">
            <MinusSquare />
          </button>
        </div>

        <div className=" flex flex-grow max-w-[600px]">
          <input
            type="text"
            className="w-full px-4 py-1 text-lg border rounded-l-full shadow-inner outline-none shadow-gray-400"
            value={obligation}
            onChange={(e) => setObligation(Number(e.target.value))}
          />
          <button
            className="flex-shrink-0 px-4 py-2 border border-l-0 border-gray-400 rounded-r-full btn btn-outline bg-stone-100"
            onClick={handleClickCount}
          >
            <Equal />
          </button>
        </div>
        <div>
          <h1>Hasil</h1>
          <div>
            <h3>Gaji Pokok: Rp. {basicSalary}</h3>
            <h3>Tunjangan: Rp. {allowance}</h3>
            <h3>Gaji Kotor: Rp. {grossSalary}</h3>
            <h3>Kewajiban Pokok: Rp. {obligation}</h3>
            <h3>Gaji Bersih: Rp. {netSalary}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
