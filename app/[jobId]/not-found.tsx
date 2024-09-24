import NotFound from '../components/NotFound';
import metadataDetails from '@/lib/metadataDetails';
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: metadataDetails.jobNotFound.title,
  description: metadataDetails.jobNotFound.description,
  icons: {
    icon: '/errorIcon/sadFace.png',
  },
};

const NotFoundJobPage = () => {
  return <NotFound type="invalid-jobId" />;
};

export default NotFoundJobPage;
