import { useCont } from '@/contextApi/context';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
const PN = require("persian-number");


export function PaginatedItems({ itemsPerPage, setCurrentItems }: any) {
  const [itemOffset, setItemOffset] = useState(0);
  const {question} = useCont();

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems( question.slice(itemOffset, endOffset));
  }, [itemOffset, question]);

  const pageCount = Math.ceil(question.length / itemsPerPage);
  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % question.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        className='flex flex-row-reverse justify-between rounded items-center w-[300px] h-[35px] my-4 px-4 border border-gray-300 '
        breakLabel="..."
        nextLabel=" < بعدی "
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="قبلی >"
        renderOnZeroPageCount={null}
      />
    </>
  );
}
