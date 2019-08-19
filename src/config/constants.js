export const API_METHODS = {
  QUESTIONS: (params) => `/api.php${params}`
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

export const CATEGORIES = [
  {
    value: '',
    label: 'All'
  },
  {
    value: 9,
    label: 'General Knowledge'
  },
  {
    value: 10,
    label: 'Entertainment: Books'
  },
  {
    value: 11,
    label: 'Entertainment: Film'
  },
  {
    value: 12,
    label: 'Entertainment: Music'
  }
];

export const TYPE = [
  {
    value: '',
    label: 'Any Type'
  },
  {
    value: 'multiple',
    label: 'Multiple Choice'
  },
  {
    value: 'boolean',
    label: 'True / False'
  },
];