import { getJobDetailsById } from '@/utils/actions';
import metadataDetails from './metadataDetails';

export const jobDetailsPageMetadataGenerator = async (jobId: string) => {
  const job = await getJobDetailsById(jobId);
  return {
    title: job.position,
    description: job.description,
  };
};

export const ApplicationPageMetadataGenerator = async (jobId: string) => {
  const { position } = await getJobDetailsById(jobId);

  return {
    title: `Apply for a ${position} position`,
    description: metadataDetails.applicationPage.description,
  };
};
