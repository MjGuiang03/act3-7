import { useState } from 'react';

export default function Act1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState(null); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setStatus({ type: 'error', message: 'Please enter your username.' });
      return;
    }
    if (!password) {
      setStatus({ type: 'error', message: 'Please enter your password.' });
      return;
    }
    if (username.trim() === 'admin' && password === '12345') {
      setStatus({ type: 'success', message: 'Welcome back, Admin! Login successful.' });
    } else {
      setStatus({ type: 'error', message: 'Invalid credentials. Please try again.' });
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setStatus(null);
  };

  return (
    <div className="w-full flex justify-center items-center py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden">
        <div className="bg-[#4f36f6] p-6 text-white text-left">
          <h2 className="text-2xl font-bold tracking-tight">Login Authentication</h2>
          <p className="text-indigo-200 text-sm font-medium mt-0.5">Activity 1</p>
        </div>
        <div className="p-6">
          {status?.type === 'success' ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl">
                ✓
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-800">Authentication Successful!</h3>
                <p className="text-sm text-slate-600 mt-1">{status.message}</p>
              </div>
              <button
                onClick={handleLogout}
                className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors text-sm cursor-pointer"
              >
                Log Out
              </button>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5 text-left">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#4f36f6] focus:ring-2 focus:ring-[#4f36f6]/20 transition-all text-sm"
                />
              </div>

              {status?.type === 'error' && (
                <div className="p-3.5 bg-[#fff1f2] border border-rose-200/80 text-rose-600 text-sm font-normal rounded-xl">
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-[#4f36f6] hover:bg-[#432ce0] active:bg-[#3822cf] text-white font-medium rounded-xl shadow-md shadow-indigo-500/20 transition-all cursor-pointer text-base"
              >
                Login
              </button>

              <p className="text-xs text-slate-400 text-center pt-2">
                Sample credentials — Username: admin, Password: 12345
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
