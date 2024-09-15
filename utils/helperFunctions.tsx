export const keywordsStrIntoArr = (str: string) => {
  return str.trim().toLowerCase().split(' ');
};

export const countryCodeToFullName = (countryCode: string) => {
  const countryCodes = {
    US: 'United States',
    GB: 'United Kingdom',
    PT: 'Portugal',
    CA: 'Canada',
    JP: 'Japan',
    NZ: 'New Zealand',
    AU: 'Australia',
    NL: 'Netherlands',
  };

  return countryCodes.hasOwnProperty(countryCode)
    ? countryCodes[countryCode as keyof typeof countryCodes]
    : '';
};

export const generateSuspenseKeys = (
  searchParams: SearchParams,
  type: 'pagination' | 'job-list'
) => {
  let suspenseKey = type === 'pagination' ? 'pag' : 'list';

  const searchParamsCopy = { ...searchParams };

  if (type === 'pagination') delete searchParamsCopy.page;

  for (const [key, value] of Object.entries(searchParamsCopy)) {
    suspenseKey = `${suspenseKey}-${key}/${value}`;
  }
  return suspenseKey;
};
