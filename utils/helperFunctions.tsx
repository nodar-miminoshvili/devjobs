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
