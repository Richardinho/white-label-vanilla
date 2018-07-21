const buildQueryString = (criteria) => {
  let result = Object.keys(criteria).reduce((memo, key) => {
  
    const paramKey = encodeURIComponent(key);
    const paramVal = encodeURIComponent(criteria[key]);

    return memo + paramKey + '=' + paramVal + '&';
  }, '?');

  return result.slice(0, -1);
};

module.exports = buildQueryString;
