// format query string to Op format
export const queryToModelFormat = (queryString: string) =>
  queryString.charAt(0).toUpperCase() + queryString.slice(1).toLowerCase()
