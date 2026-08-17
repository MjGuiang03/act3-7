import { useState } from 'react';

export default function Act4() {
    const [customerName, setCustomerName] = useState('');
    const [consumption, setConsumption] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = (e) => {
        e.preventDefault();
        setError('');

        if (!customerName.trim()) {
            setError('Please enter customer name.');
            setResult(null);
            return;
        }

        if (consumption === '' || isNaN(consumption) || parseFloat(consumption) < 0) {
            setError('Please enter electricity consumption.');
            setResult(null);
            return;
        }

        const kWh = parseFloat(consumption);
        let rate = 10;

        if (kWh <= 100) {
            rate = 10;
        } else if (kWh <= 200) {
            rate = 12;
        } else if (kWh <= 300) {
            rate = 15;
        } else {
            rate = 18;
        }

        const totalBill = kWh * rate;
        const isHighUsage = kWh > 300;

        setResult({
            customerName: customerName.trim(),
            consumption: kWh,
            rate,
            totalBill,
            isHighUsage,
        });
    };

    const handleClear = () => {
        setCustomerName('');
        setConsumption('');
        setResult(null);
        setError('');
    };

    return (
        <div className="w-full flex justify-center items-center py-12 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
                <div className="bg-[#4f36f6] p-6 text-white text-left">
                    <h2 className="text-2xl font-bold tracking-tight">Electricity Bill Calculator</h2>
                    <p className="text-indigo-200 text-sm font-medium mt-0.5">Activity 4</p>
                </div>

                <div className="p-6">
                    <form onSubmit={handleCalculate} className="space-y-5 text-left">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Customer Name
                            </label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                placeholder="Enter customer name"
                                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Electricity Consumption (kWh)
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={consumption}
                                onChange={(e) => setConsumption(e.target.value)}
                                placeholder="Enter consumption in kWh"
                                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
                            />
                        </div>

                        {error && (
                            <div className="p-3.5 bg-[#fff1f2] border border-rose-200/80 text-rose-600 text-sm font-normal rounded-xl">
                                {error}
                            </div>
                        )}

                        <div className="grid grid-cols-2 gap-3 pt-1">
                            <button
                                type="submit"
                                className="py-2.5 bg-[#4f36f6] hover:bg-[#432ce0] active:bg-[#3822cf] text-white font-medium rounded-xl shadow-md shadow-indigo-500/20 transition-all cursor-pointer text-base"
                            >
                                Calculate Bill
                            </button>
                            <button
                                type="button"
                                onClick={handleClear}
                                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-all cursor-pointer text-base"
                            >
                                Clear
                            </button>
                        </div>
                    </form>

                    {result && (
                        <div className="mt-6 border border-slate-200/80 rounded-2xl bg-[#f8fafc] overflow-hidden text-left shadow-xs">
                            <div className="p-5 space-y-3">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 font-normal">Customer Name</span>
                                    <span className="font-semibold text-slate-800">{result.customerName}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 font-normal">Consumption</span>
                                    <span className="font-semibold text-slate-800">{result.consumption} kWh</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-slate-500 font-normal">Rate</span>
                                    <span className="font-semibold text-slate-800">₱{result.rate} / kWh</span>
                                </div>
                                <div className="flex justify-between items-center text-sm pt-1">
                                    <span className="text-slate-500 font-normal">Total Bill</span>
                                    <span className="font-bold text-[#4f36f6] text-xl">
                                        ₱{result.totalBill.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </span>
                                </div>
                            </div>

                            <div
                                className={`py-3.5 px-4 text-center font-bold text-base ${result.isHighUsage
                                        ? 'bg-[#fff1f2] text-[#b91c1c] border-t border-rose-100'
                                        : 'bg-[#f0fdf4] text-[#15803d] border-t border-emerald-100'
                                    }`}
                            >
                                {result.isHighUsage ? 'High Electricity Usage' : 'Normal Electricity Usage'}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
