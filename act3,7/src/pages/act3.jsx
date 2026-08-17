import { useState } from 'react';

export default function Act3() {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheckPassword = (e) => {
    e.preventDefault();
    setError('');

    if (!password) {
      setError('Please enter a password.');
      setResult(null);
      return;
    }

    const len = password.length;
    let status = '';
    let message = '';
    let theme = '';

    if (len < 6) {
      status = 'Weak';
      message = 'Please create a stronger password.';
      theme = 'red';
    } else if (len >= 6 && len <= 7) {
      status = 'Medium';
      message = 'Consider creating a longer password.';
      theme = 'amber';
    } else {
      status = 'Strong';
      message = 'You can use this password.';
      theme = 'green';
    }

    setResult({ status, message, theme });
  };

  const handleClear = () => {
    setPassword('');
    setResult(null);
    setError('');
  };

  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="bg-[#4f36f6] p-6 text-white text-left">
          <h2 className="text-2xl font-bold tracking-tight">Password Strength Checker</h2>
          <p className="text-indigo-200 text-sm font-medium mt-0.5">Activity 3</p>
        </div>

        <div className="p-6">
          <form onSubmit={handleCheckPassword} className="space-y-4 text-left">
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                Password
              </label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
              />
              <p className="text-slate-400 text-xs mt-1">
                Character count: {password.length}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                type="submit"
                className="py-2.5 bg-[#4f36f6] hover:bg-[#432ce0] active:bg-[#3822cf] text-white font-medium rounded-xl shadow-md shadow-indigo-500/20 transition-all cursor-pointer text-base"
              >
                Check Password
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
              className={`mt-6 p-5 rounded-2xl border text-left space-y-1.5 ${
                result.theme === 'red'
                  ? 'bg-[#fff1f2] border-rose-300/80'
                  : result.theme === 'amber'
                  ? 'bg-[#fffdf0] border-amber-300/80'
                  : 'bg-[#f0fdf4] border-emerald-300/80'
              }`}
            >
              <h3
                className={`font-bold text-xl ${
                  result.theme === 'red'
                    ? 'text-[#b91c1c]'
                    : result.theme === 'amber'
                    ? 'text-[#b45309]'
                    : 'text-[#15803d]'
                }`}
              >
                Password Status: {result.status}
              </h3>
              <p
                className={`text-sm ${
                  result.theme === 'red'
                    ? 'text-[#b91c1c]'
                    : result.theme === 'amber'
                    ? 'text-[#b45309]'
                    : 'text-[#15803d]'
                }`}
              >
                {result.message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
