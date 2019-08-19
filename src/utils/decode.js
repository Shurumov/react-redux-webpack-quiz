const quoteCode = /&quot;/g;
export const decoder = (string = '') => string.replace(quoteCode, '"').replace('&#039;', "'");