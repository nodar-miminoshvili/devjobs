import { calculatePageCount } from '@/utils/actions';
import Pagination from './Pagination';

const PaginationWrapper = async ({ searchParams }: { searchParams: SearchParams }) => {
  const totalPages = await calculatePageCount(searchParams);

  return (
    <>
      <Pagination totalPages={totalPages} />
    </>
  );
};

export default PaginationWrapper;
