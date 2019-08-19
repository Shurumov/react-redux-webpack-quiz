export const API_METHODS = {
  QUESTIONS: '/api.php?amount=2'
};

export const {
  API_URL,
  API_VERSION,
  API_DOMAIN,
} = process.env || {};

export const ROUTES = {
  TEST: '/test',
  QUESTIONS: '/questions',
  RESULTS: '/results',
};

export const DIFFICULTY = [
  {
    value: '',
    label: 'All'
  },
  {
    value: 'easy',
    label: 'Easy'
  },
  {
    value: 'middle',
    label: 'Middle'
  },
  {
    value: 'hard',
    label: 'Hard'
  },
];