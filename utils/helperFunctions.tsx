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

export const displayPostTime = (postTimeeInSeconds: number) => {
  const currentTimeInSeconds = Math.round(Date.now() / 1000);
  const timeDiffInSeconds = currentTimeInSeconds - postTimeeInSeconds;
  const timeDiffInDays = Math.round(timeDiffInSeconds / (3600 * 24));

  const pluralFormIfnecessary = (num: number, str: string) => {
    return num > 1 ? `${str}s ago` : `${str} ago`;
  };

  if (timeDiffInDays > 365) {
    const yearsDiff = Math.floor(timeDiffInDays / 365);
    return `${yearsDiff} ${pluralFormIfnecessary(yearsDiff, 'year')}`;
  } else if (timeDiffInDays > 29) {
    const monthsDiff = Math.round(timeDiffInDays / 30);
    return `${monthsDiff} ${pluralFormIfnecessary(monthsDiff, 'month')}`;
  } else if (timeDiffInDays > 0) {
    return `${timeDiffInDays} ${pluralFormIfnecessary(timeDiffInDays, 'day')}`;
  } else {
    return 'today';
  }
};
