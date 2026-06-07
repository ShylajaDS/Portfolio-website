import { createSlice } from '@reduxjs/toolkit';
import { movieCatalog } from '../../data/movieData';

const initialState = {
  prompt: '',
  genre: 'All',
  suggestions: [],
  aiSummary: '',
  status: 'idle',
};

const recommendationSlice = createSlice({
  name: 'recommendations',
  initialState,
  reducers: {
    setPrompt(state, action) {
      state.prompt = action.payload;
    },
    setGenre(state, action) {
      state.genre = action.payload;
    },
    generateSuggestions(state, action) {
      state.status = 'generating';
      const prompt = action.payload.trim().toLowerCase();
      const genre = state.genre;
      const matched = movieCatalog.filter((movie) => {
        const matchesGenre = genre === 'All' || movie.genre === genre;
        const matchesPrompt =
          prompt.length === 0 ||
          movie.title.toLowerCase().includes(prompt) ||
          movie.description.toLowerCase().includes(prompt) ||
          movie.genre.toLowerCase().includes(prompt);
        return matchesGenre && matchesPrompt;
      });

      state.suggestions = matched.length > 0 ? matched : movieCatalog.filter((movie) => genre === 'All' || movie.genre === genre);
      state.aiSummary = matched.length > 0
        ? `Generated ${state.suggestions.length} recommendations based on your preferences: “${action.payload}”.`
        : `No exact matches found for “${action.payload}”. Showing top picks in ${genre} instead.`;
      state.status = 'complete';
    },
    clearSuggestions(state) {
      state.suggestions = [];
      state.aiSummary = '';
      state.status = 'idle';
    },
  },
});

export const { setPrompt, setGenre, generateSuggestions, clearSuggestions } = recommendationSlice.actions;
export default recommendationSlice.reducer;
