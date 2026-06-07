import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import AuthForm from './components/AuthForm';
import LanguageSwitcher from './components/LanguageSwitcher';
import RecommendationCard from './components/RecommendationCard';
import { logout } from './features/auth/authSlice';
import { setGenre, generateSuggestions, clearSuggestions } from './features/recommendations/recommendationSlice';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const recommendation = useSelector((state) => state.recommendations);
  const { t } = useTranslation();
  const [promptValue, setPromptValue] = useState('');
  const [localError, setLocalError] = useState('');

  const genres = ['All', 'Action', 'Drama', 'Sci-Fi', 'Romance', 'Documentary', 'Fantasy'];

  const handleGenerate = (event) => {
    event.preventDefault();
    if (!promptValue.trim()) {
      setLocalError(t('validation.required'));
      return;
    }
    setLocalError('');
    dispatch(generateSuggestions(promptValue));
  };

  const handleGenreChange = (event) => {
    dispatch(setGenre(event.target.value));
  };

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearSuggestions());
    setPromptValue('');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <header className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-2xl shadow-slate-950/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-fuchsia-500/80">NetflixGPT</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{t('title')}</h1>
            <p className="mt-4 max-w-2xl leading-8 text-slate-300">{t('subtitle')}</p>
          </div>
          <div className="flex flex-col gap-4 sm:items-end">
            <LanguageSwitcher />
            {auth.user && (
              <button
                onClick={handleLogout}
                className="rounded-full bg-slate-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                {t('logout')}
              </button>
            )}
          </div>
        </header>

        {auth.user ? (
          <main className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <section className="space-y-8">
              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{t('welcome', { name: auth.user.name })}</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">{t('topPicks')}</h2>
                  </div>
                  <div className="rounded-3xl bg-slate-950/90 p-4 text-sm text-slate-300 shadow-inner shadow-slate-950/20">
                    <p className="font-semibold text-white">{t('profile')}</p>
                    <p>{auth.user.email}</p>
                    <p>{t('plan')}: {auth.user.plan}</p>
                    <p>{t('joined')}: {auth.user.joined}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40">
                <form onSubmit={handleGenerate} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">{t('promptLabel')}</label>
                    <input
                      value={promptValue}
                      onChange={(e) => setPromptValue(e.target.value)}
                      className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-fuchsia-500"
                      placeholder="e.g. moody sci-fi, heartwarming romance, or strong female lead"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-[0.9fr_0.7fr]">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-300">{t('genreLabel')}</label>
                      <select
                        value={recommendation.genre}
                        onChange={handleGenreChange}
                        className="w-full rounded-3xl border border-slate-800 bg-slate-950 px-4 py-4 text-white outline-none transition focus:border-fuchsia-500"
                      >
                        {genres.map((genre) => (
                          <option key={genre} value={genre}>{genre}</option>
                        ))}
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="rounded-3xl bg-gradient-to-r from-fuchsia-600 to-sky-500 px-5 py-4 text-base font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-95"
                    >
                      {t('generate')}
                    </button>
                  </div>
                  {localError && <p className="text-sm text-rose-300">{localError}</p>}
                  {recommendation.aiSummary && (
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-sm text-slate-300">
                      <strong className="block text-white">{t('summary')}</strong>
                      <p className="mt-2">{recommendation.aiSummary}</p>
                    </div>
                  )}
                </form>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                {recommendation.suggestions.map((movie) => (
                  <RecommendationCard key={movie.id} movie={movie} />
                ))}
              </div>
            </section>

            <aside className="space-y-6">
              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40">
                <h3 className="text-xl font-semibold text-white">{t('subtitle')}</h3>
                <p className="mt-4 text-slate-400">Use your prompt to capture mood, genre, or story energy. NetflixGPT matches that idea to cinematic recommendations curated just for you.</p>
              </div>

              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-xl shadow-slate-950/40">
                <h3 className="text-xl font-semibold text-white">Quick prompts</h3>
                <ul className="mt-4 space-y-3 text-slate-300">
                  <li className="rounded-3xl bg-slate-950/70 p-4">Blockbuster sci-fi with a smart hero</li>
                  <li className="rounded-3xl bg-slate-950/70 p-4">Intimate drama about family and legacy</li>
                  <li className="rounded-3xl bg-slate-950/70 p-4">Fantasy quest with strong visuals</li>
                </ul>
              </div>
            </aside>
          </main>
        ) : (
          <div className="mx-auto max-w-3xl">
            <AuthForm />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
