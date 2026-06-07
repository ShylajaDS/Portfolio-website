import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { login, register } from '../features/auth/authSlice';

const AuthForm = () => {
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { t } = useTranslation();

  const validate = () => {
    if (!email || !password || (mode === 'register' && !name)) {
      setLocalError(t('validation.required'));
      return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setLocalError(t('validation.email'));
      return false;
    }
    if (password.length < 6) {
      setLocalError(t('validation.minimum'));
      return false;
    }
    setLocalError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    if (mode === 'login') {
      dispatch(login({ email, password }));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950/95 p-8 shadow-2xl shadow-slate-950/20">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-white">{t('title')}</h2>
        <div className="flex gap-2 text-sm text-slate-400">
          <button
            onClick={() => setMode('login')}
            className={`rounded-full px-4 py-2 transition ${mode === 'login' ? 'bg-slate-800 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
          >
            {t('login')}
          </button>
          <button
            onClick={() => setMode('register')}
            className={`rounded-full px-4 py-2 transition ${mode === 'register' ? 'bg-slate-800 text-white' : 'bg-slate-900 text-slate-400 hover:bg-slate-800'}`}
          >
            {t('register')}
          </button>
        </div>
      </div>
      <p className="mb-6 text-slate-400">{t('authHint')}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <label className="block text-sm text-slate-300">
            <span>{t('name')}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-slate-500"
              placeholder="Ava"
            />
          </label>
        )}
        <label className="block text-sm text-slate-300">
          <span>{t('email')}</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-slate-500"
            placeholder="hello@example.com"
          />
        </label>
        <label className="block text-sm text-slate-300">
          <span>{t('password')}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-slate-500"
            placeholder="********"
          />
        </label>
        {(localError || auth.error) && (
          <p className="rounded-2xl bg-rose-500/10 px-4 py-3 text-sm text-rose-200">{localError || auth.error}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-pink-600 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.01]"
        >
          {t('submit')}
        </button>
      </form>
      {auth.loading && <p className="mt-4 text-sm text-slate-500">Authenticating...</p>}
    </div>
  );
};

export default AuthForm;
