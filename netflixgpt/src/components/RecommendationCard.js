import React from 'react';

const RecommendationCard = ({ movie }) => {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-950/95 p-6 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-slate-700">
      <div className="mb-4 flex h-40 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-600 via-slate-900 to-slate-800 text-center text-sm text-slate-100 shadow-inner">
        <span className="max-w-[10rem] px-4 text-lg font-semibold">{movie.genre}</span>
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">{movie.title}</h3>
      <p className="mb-3 text-sm leading-6 text-slate-400">{movie.description}</p>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">{movie.mood}</p>
    </article>
  );
};

export default RecommendationCard;
