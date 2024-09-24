import NotFound from './components/NotFound';
import metadataDetails from '@/lib/metadataDetails';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: metadataDetails.pageNotFound.title,
  description: metadataDetails.pageNotFound.description,
  icons: {
    icon: '/errorIcon/sadFace.png',
  },
};

const NotFoundPage = () => {
  return <NotFound type="default" />;
};

export default NotFoundPage;
