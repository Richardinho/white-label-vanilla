const buildCriteriaFromQueryString = (queryString) => {
  const criteria = new URLSearchParams(queryString);
  return {
    minYear: criteria.get('minYear') || -50,
    yearFrom: criteria.get('yearFrom') || 0,
    yearTo: criteria.get('yearTo') || 200,
    maxYear: criteria.get('maxYear') || 500,
    dynasty: criteria.get('dynasty') || 'all',
    sortBy: criteria.get('sortBy') || 'reign-asc',
    offset: criteria.get('offset') || 0,
  };
};

module.exports = buildCriteriaFromQueryString;
