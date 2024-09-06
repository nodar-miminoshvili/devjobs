import { DocumentData, QuerySnapshot, collection, getDocs, query, where } from 'firebase/firestore';
import Logout from './components/Logout';
import { db } from '@/firebaseConfig';
import JobList from './components/home/JobList';
import Search from './components/home/Search/Search';
import { keywordsStrIntoArr } from '@/utils/helperFunctions';

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const jobsRef = collection(db, 'jobs');
  let querySnapshot: QuerySnapshot<DocumentData, DocumentData>;

  const emptySearchParams = Object.keys(searchParams).length === 0;

  if (emptySearchParams) {
    querySnapshot = await getDocs(jobsRef);
  } else {
    const { keywords, location, fullTime } = searchParams;

    const conditions = [];

    if (keywords)
      conditions.push(where('keywords', 'array-contains-any', keywordsStrIntoArr(keywords)));
    if (location) conditions.push(where('location', '==', location));
    if (fullTime) conditions.push(where('fullTime', '==', Boolean(fullTime)));

    const q = query(jobsRef, ...conditions);
    querySnapshot = await getDocs(q);
  }

  const jobs: unknown = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  return (
    <main className="container pb-12">
      <Search />
      <JobList jobs={jobs as Job[]} />
      <Logout />
    </main>
  );
}
