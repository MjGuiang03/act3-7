import { useState } from 'react';

export default function Act2() {
  const [studentName, setStudentName] = useState('');
  const [score, setScore] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleEvaluate = (e) => {
    e.preventDefault();
    setError('');

    if (!studentName.trim()) {
      setError('Please enter student name.');
      setResult(null);
      return;
    }

    if (score === '' || isNaN(score) || parseFloat(score) < 0 || parseFloat(score) > 100) {
      setError('Invalid score.');
      setResult(null);
      return;
    }

    const numScore = parseFloat(score);

    let remarks = '';
    let theme = '';

    if (numScore >= 90) {
      remarks = 'Excellent';
      theme = 'green';
    } else if (numScore >= 85) {
      remarks = 'Very Good';
      theme = 'green';
    } else if (numScore >= 80) {
      remarks = 'Good';
      theme = 'blue';
    } else if (numScore >= 75) {
      remarks = 'Passed';
      theme = 'amber';
    } else {
      remarks = 'Failed';
      theme = 'red';
    }

    setResult({
      name: studentName.trim(),
      score: numScore,
      remarks,
      theme,
    });
  };

  const handleClear = () => {
    setStudentName('');
    setScore('');
    setResult(null);
    setError('');
  };

  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="bg-[#4f36f6] p-6 text-white text-left">
          <h2 className="text-2xl font-bold tracking-tight">Student Grade Evaluation</h2>
          <p className="text-indigo-200 text-sm font-medium mt-0.5">Activity 2</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleEvaluate} className="space-y-5 text-left">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Student Name
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Enter student name"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Score
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                placeholder="Enter score (0-100)"
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
                Evaluate
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
            <div
              className={`mt-6 p-5 rounded-2xl border text-left space-y-4 ${
                result.theme === 'green'
                  ? 'bg-[#f0fdf4] border-[#86efac]'
                  : result.theme === 'blue'
                  ? 'bg-[#f0f7ff] border-[#93c5fd]'
                  : result.theme === 'amber'
                  ? 'bg-[#fffdf0] border-amber-300'
                  : 'bg-[#fff1f2] border-rose-300'
              }`}
            >
              <div>
                <p
                  className={`text-sm font-normal ${
                    result.theme === 'green'
                      ? 'text-emerald-500'
                      : result.theme === 'blue'
                      ? 'text-blue-400'
                      : result.theme === 'amber'
                      ? 'text-amber-600'
                      : 'text-rose-400'
                  }`}
                >
                  Student Name
                </p>
                <p
                  className={`font-bold text-base mt-0.5 ${
                    result.theme === 'green'
                      ? 'text-[#047857]'
                      : result.theme === 'blue'
                      ? 'text-[#1d4ed8]'
                      : result.theme === 'amber'
                      ? 'text-[#854d0e]'
                      : 'text-[#9f1239]'
                  }`}
                >
                  {result.name}
                </p>
              </div>

              <div>
                <p
                  className={`text-sm font-normal ${
                    result.theme === 'green'
                      ? 'text-emerald-500'
                      : result.theme === 'blue'
                      ? 'text-blue-400'
                      : result.theme === 'amber'
                      ? 'text-amber-600'
                      : 'text-rose-400'
                  }`}
                >
                  Score
                </p>
                <p
                  className={`font-bold text-base mt-0.5 ${
                    result.theme === 'green'
                      ? 'text-[#047857]'
                      : result.theme === 'blue'
                      ? 'text-[#1d4ed8]'
                      : result.theme === 'amber'
                      ? 'text-[#854d0e]'
                      : 'text-[#9f1239]'
                  }`}
                >
                  {result.score}
                </p>
              </div>

              <div>
                <p
                  className={`text-sm font-normal ${
                    result.theme === 'green'
                      ? 'text-emerald-500'
                      : result.theme === 'blue'
                      ? 'text-blue-400'
                      : result.theme === 'amber'
                      ? 'text-amber-600'
                      : 'text-rose-400'
                  }`}
                >
                  Remarks
                </p>
                <p
                  className={`font-bold text-2xl mt-0.5 ${
                    result.theme === 'green'
                      ? 'text-[#047857]'
                      : result.theme === 'blue'
                      ? 'text-[#1d4ed8]'
                      : result.theme === 'amber'
                      ? 'text-[#9a3412]'
                      : 'text-[#9f1239]'
                  }`}
                >
                  {result.remarks}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
