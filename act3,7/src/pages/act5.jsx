import { useState } from 'react';

export default function Act5() {
    const [employeeName, setEmployeeName] = useState('');
    const [timeIn, setTimeIn] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const formatTimeStr = (decimalTime) => {
        const num = parseFloat(decimalTime);
        if (isNaN(num)) return decimalTime;

        let hours = Math.floor(num);
        const minutes = Math.round((num - hours) * 60);
        const ampm = hours >= 12 ? 'PM' : 'AM';

        const displayHours = hours % 12 === 0 ? 12 : hours % 12;
        const minStr = minutes < 10 ? `0${minutes}` : minutes;

        return `${displayHours}:${minStr} ${ampm}`;
    };

    const handleCheckAttendance = (e) => {
        e.preventDefault();
        setError('');

        if (!employeeName.trim()) {
            setError('Please enter employee name.');
            setResult(null);
            return;
        }

        if (timeIn === '' || timeIn === null || timeIn === undefined) {
            setError('Please enter time in.');
            setResult(null);
            return;
        }

        const numTime = parseFloat(timeIn);

        if (isNaN(numTime) || numTime < 0 || numTime > 24) {
            setError('Invalid time.');
            setResult(null);
            return;
        }

        const isLate = numTime > 8.0;
        const status = isLate ? 'Late' : 'On Time';
        const subMessage = isLate ? 'Please be on time tomorrow.' : 'Good job!';
        const formattedTime = formatTimeStr(numTime);

        setResult({
            employeeName: employeeName.trim(),
            formattedTime,
            status,
            subMessage,
            isLate,
        });
    };

    const handleReset = () => {
        setEmployeeName('');
        setTimeIn('');
        setResult(null);
        setError('');
    };

    return (
        <div className="w-full flex justify-center items-center py-12 px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">

                <div className="bg-[#4f36f6] p-6 text-white text-left">
                    <h2 className="text-2xl font-bold tracking-tight">Employee Attendance Checker</h2>
                    <p className="text-indigo-200 text-sm font-medium mt-0.5">Activity 5</p>
                </div>

                <div className="p-6">
                    <form onSubmit={handleCheckAttendance} className="space-y-5 text-left">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Employee Name
                            </label>
                            <input
                                type="text"
                                value={employeeName}
                                onChange={(e) => setEmployeeName(e.target.value)}
                                placeholder="Enter employee name"
                                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                                Time In
                            </label>
                            <input
                                type="text"
                                value={timeIn}
                                onChange={(e) => setTimeIn(e.target.value)}
                                placeholder="e.g. 8.5 = 8:30 AM"
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
                                Check Attendance
                            </button>
                            <button
                                type="button"
                                onClick={handleReset}
                                className="py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-all cursor-pointer text-base"
                            >
                                Reset
                            </button>
                        </div>
                    </form>

                    {result && (
                        <div
                            className={`mt-6 p-5 rounded-2xl border text-left space-y-3.5 ${result.isLate
                                    ? 'bg-[#fffdf0] border-amber-300'
                                    : 'bg-[#f0fdf4] border-[#86efac]'
                                }`}
                        >
                            <div>
                                <p
                                    className={`text-sm font-normal ${result.isLate ? 'text-amber-800/70' : 'text-emerald-600/80'
                                        }`}
                                >
                                    Employee Name
                                </p>
                                <p
                                    className={`font-bold text-base mt-0.5 ${result.isLate ? 'text-[#78350f]' : 'text-[#065f46]'
                                        }`}
                                >
                                    {result.employeeName}
                                </p>
                            </div>

                            <div>
                                <p
                                    className={`text-sm font-normal ${result.isLate ? 'text-amber-800/70' : 'text-emerald-600/80'
                                        }`}
                                >
                                    Time In
                                </p>
                                <p
                                    className={`font-bold text-base mt-0.5 ${result.isLate ? 'text-[#78350f]' : 'text-[#065f46]'
                                        }`}
                                >
                                    {result.formattedTime}
                                </p>
                            </div>

                            <div>
                                <p
                                    className={`text-sm font-normal ${result.isLate ? 'text-amber-800/70' : 'text-emerald-600/80'
                                        }`}
                                >
                                    Attendance Status
                                </p>
                                <p
                                    className={`font-bold text-2xl mt-0.5 ${result.isLate ? 'text-[#b45309]' : 'text-[#15803d]'
                                        }`}
                                >
                                    {result.status}
                                </p>
                            </div>

                            <p
                                className={`text-sm font-medium pt-0.5 ${result.isLate ? 'text-[#b45309]' : 'text-[#15803d]'
                                    }`}
                            >
                                {result.subMessage}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
