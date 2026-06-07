import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      title: 'NetflixGPT',
      subtitle: 'Personalized movie recommendations powered by smart prompts.',
      login: 'Login',
      register: 'Register',
      email: 'Email',
      password: 'Password',
      name: 'Name',
      submit: 'Submit',
      logout: 'Logout',
      promptLabel: 'Enter a movie mood, genre, or keyword',
      genreLabel: 'Select genre',
      generate: 'Generate recommendations',
      welcome: 'Welcome back, {{name}}!',
      authHint: 'Sign in or register to unlock your AI movie guide.',
      profile: 'Profile',
      plan: 'Plan',
      joined: 'Member since',
      summary: 'AI Summary',
      topPicks: 'Top Picks for You',
      noResults: 'No exact match found. Try different keywords.',
      validation: {
        required: 'This field is required.',
        minimum: 'Password needs at least 6 characters.',
        email: 'Please use a valid email address.',
      },
      language: 'Language',
    },
  },
  es: {
    translation: {
      title: 'NetflixGPT',
      subtitle: 'Recomendaciones de películas personalizadas impulsadas por prompts inteligentes.',
      login: 'Iniciar sesión',
      register: 'Registrarse',
      email: 'Correo electrónico',
      password: 'Contraseña',
      name: 'Nombre',
      submit: 'Enviar',
      logout: 'Cerrar sesión',
      promptLabel: 'Escribe una sensación, género o palabra clave',
      genreLabel: 'Selecciona un género',
      generate: 'Generar recomendaciones',
      welcome: '¡Bienvenido de nuevo, {{name}}!',
      authHint: 'Inicia sesión o regístrate para desbloquear tu guía de películas AI.',
      profile: 'Perfil',
      plan: 'Plan',
      joined: 'Miembro desde',
      summary: 'Resumen AI',
      topPicks: 'Selecciones principales para ti',
      noResults: 'No se encontró una coincidencia exacta. Prueba con otras palabras clave.',
      validation: {
        required: 'Este campo es obligatorio.',
        minimum: 'La contraseña necesita al menos 6 caracteres.',
        email: 'Por favor usa una dirección de correo válida.',
      },
      language: 'Idioma',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
