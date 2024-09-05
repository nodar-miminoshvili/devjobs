import { collection, getDocs } from 'firebase/firestore';
import Logout from './components/Logout';
import { db } from '@/firebaseConfig';
import JobList from './components/home/JobList';
import Search from './components/home/Search/Search';

export default async function Home() {
  const jobsRef = collection(db, 'jobs');
  const querySnapshot = await getDocs(jobsRef);
  const jobs: unknown = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  return (
    <main className="container pb-12">
      <Search />
      <JobList jobs={jobs as Job[]} />
      <Logout />
    </main>
  );
}
