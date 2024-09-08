type Theme = 'dark' | 'system' | 'light';

type Job = {
  id: number;
  company: string;
  position: string;
  fullTime: boolean;
  location: string;
  description: string;
  postedAt: { seconds: number; nanoseconds: number };
  requirements: {
    list: string[];
    overview: string;
  };
  whatYouWillDo: {
    overview: string;
    list: string[];
  };
  logo: string;
  logoBackground: string;
};

type SearchParams = {
  keywords?: string;
  location?: string;
  fullTime?: string;
  page?: string;
};
