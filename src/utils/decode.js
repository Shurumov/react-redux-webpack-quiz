const quoteCode = /&quot;/g;
const apostrCode = /&#039;/g;
const amdCode = /&amp;/g;
export const decoder = (string = '') => string.replace(quoteCode, '"').replace(apostrCode, "'").replace(amdCode,"&");