interface MetadataConfig {
  [key: string]: {
    title: string;
    description: string;
  };
}
const metadataDetails: MetadataConfig = {
  rootLayout: {
    title: 'devjobs',
    description:
      'Find your next developer job at DevJobs! Explore diverse listings, apply easily, and connect with top tech companies. Kickstart your career today!',
  },

  jobNotFound: {
    title: 'Job Not Found',
    description: 'Oops! Could not find the requested job.',
  },

  pageNotFound: {
    title: 'Page Not Found',
    description: 'Oops! Could not find the requested Page.',
  },

  errorPage: {
    title: 'Oops! Something Went Wrong',
    description: 'Oops! Something went wrong. You can try again or visit the homepage.',
  },

  applicationPage: {
    title: '',
    description:
      'Submit your application for a tech position on DevJobs. Provide your full name, upload your CV, and agree to the terms and conditions to apply. Take the next step in your career!',
  },

  loginPage: {
    title: 'devjobs | login',
    description:
      'Log in to DevJobs with Google or GitHub. Access your profile, manage applications, and explore new job opportunities!',
  },

  profilePage: {
    title: 'devjobs | profile',
    description:
      'Check your job applications on your DevJobs profile. Review your submitted applications in one location.',
  },
};

export default metadataDetails;
