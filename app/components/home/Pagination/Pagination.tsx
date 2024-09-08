'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { FaAngleLeft as LeftIcon } from 'react-icons/fa';
import { FaAngleRight as RightIcon } from 'react-icons/fa';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = useCallback(
    (pageNumber: number | string) => {
      const params = new URLSearchParams(searchParams);
      params.set('page', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    },
    [pathname, searchParams]
  );

  const createPageLinks = useCallback(() => {
    const pages = [];
    for (let idx = 1; idx <= totalPages; idx++) {
      const pageURL = createPageURL(idx);
      pages.push({ pageURL, pageNum: idx });
    }
    return pages;
  }, [totalPages, createPageURL]);

  if (totalPages === 1) return null;

  const pages = createPageLinks();

  return (
    <ul className="flex justify-center gap-3 mt-auto py-4 items-center">
      <Link
        className={`text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${
          currentPage <= 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        href={createPageURL(currentPage - 1)}
      >
        <LeftIcon />
      </Link>

      {pages.map(page => {
        return (
          <Link
            key={page.pageNum}
            href={page.pageURL}
            className={`font-semibold text-lg hover:text-[var(--text-primary)] transition-colors
          ${
            page.pageNum === currentPage
              ? 'text-[var(--text-teritary)] pointer-events-none'
              : 'text-[var(--text-secondary)]'
          }`}
          >
            {page.pageNum}
          </Link>
        );
      })}

      <Link
        className={`text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors ${
          currentPage >= totalPages ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        href={createPageURL(currentPage + 1)}
      >
        <RightIcon />
      </Link>
    </ul>
  );
};

export default Pagination;
