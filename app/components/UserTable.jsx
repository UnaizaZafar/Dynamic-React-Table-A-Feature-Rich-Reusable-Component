"use client";
import { useState, useEffect } from "react";
import Dropdown from "./Dropdown";

const UserTable = ({ userData, tableHeading, columns }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  const [currentPage, setCurrentPage] = useState(1); //to be at the 1st page when page loads
  const [paginationArr, setPaginationArr] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState(10);
  const rows = [10, 20, 50];
  const lastIndex = currentPage * selectedRows; //getting the index of last row on selected page
  const startIndex = lastIndex - selectedRows;
  const numberOfPages = Math.ceil(data.length / selectedRows); // divide total data with rows to get number of pages on which the data is divided
  const records = data.slice(startIndex, lastIndex);
  let tempArr = Array.from({ length: numberOfPages }, (_, key) => key + 1);

  function renderPages() {
    if (numberOfPages <= 5) setPaginationArr([...tempArr])
    else {
      let startPage = currentPage - 2;
      let endPage = currentPage + 2;

      if (startPage < 1) {
        startPage = 1;
        endPage = 5;
      }
      else if (endPage > tempArr.length) {
        endPage = tempArr.length;
        startPage = Math.max(endPage - 4, 1);
      }

      let newTempArr = tempArr.slice(startPage - 1, endPage);
      setPaginationArr(newTempArr);
    }
  }
  useEffect(() => {
    renderPages();
  }, [currentPage]);
  const handleSelect = (rows) => {
    setSelectedRows(rows);
    setIsOpen(false);
  }

  return (
    <div className="mx-auto w-full max-w-4/5 rounded-lg px-8 py-6 text-black bg-white border border-zinc-200">
      <h1 className="text-3xl text-cyan-800 font-bold  pb-4">{tableHeading}</h1>

      <table className="w-full  rounded-lg overflow-hidden shadow-custom-shadow flex flex-col">
        <thead className="border-b border-zinc-0 bg-zinc-0">
          <tr className="*:py-3 *:px-6 *:grow *:basis-0 w-full text-left flex">
            {columns.map((headers, id) => (
              <th key={id}>{headers.label}</th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-auto w-full h-full max-h-60vh">
          {records.map((obj, id) => (
            <tr
              key={id}
              className="flex *:py-4 *:px-6 *:grow *:basis-0 border-b border-zinc-0"
            >
              {columns.map((col, id) =>
                col.key === "inStock" ? (
                  <td key={id}>
                    {obj.inStock ? (
                      // tick
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={0}
                        height={0}
                        className="size-6"
                        viewBox="0 0 64 64"
                      >
                        <path d="M27 55L6 33 9 29 26 41 55 12 59 18z"></path>
                      </svg>
                    ) : (
                      // cross
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width={0}
                        height={0}
                        className="size-6"
                        viewBox="0 0 64 64"
                      >
                        <path d="M 12 8 L 8 12 L 24.666018 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666018 L 12 8 z"></path>
                      </svg>
                    )}
                  </td>
                ) : (
                  <td key={id}>{obj[col.key]}</td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-end gap-4 mt-4">
        {/* Select Rows per Table */}
        <div className=" flex gap-2 items-center w-full">
          <h1 className="text-sm">Select No. of Rows</h1>
          <div className="relative">
            <button className="flex justify-between items-center border rounded border-gray-300 w-20 px-1 py-0.5 shadow-sm  bg-white font-medium text-cyan-800 hover:bg-gray-50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedRows}
              <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
            </button>
            {isOpen && (
              <div className=" absolute rounded-md shadow-lg bg-white ">
                {rows.map((row, index) => (
                  <button className=" px-8 py-2
                                text-sm text-black
                                hover:bg-cyan-800 hover:text-white w-full" key={index} onClick={() => handleSelect(row)}>
                    {row}

                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {data.length <= selectedRows ? "" :
          <>
            {/*show PAGINATION */}
            <div className="flex gap-3 justify-end items-center">
              {/* Go to first */}
              <button
                onClick={() => {
                  setCurrentPage(1);
                }}
                className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center  ${currentPage === 1
                  && "hover:bg-white !text-black/50 cursor-not-allowed"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width={24}
                  height={24}
                  strokeWidth={2}
                >
                  <path d="M11 7l-5 5l5 5" />
                  <path d="M17 7l-5 5l5 5" />
                </svg>
              </button>
              {/* previous */}
              <button
                onClick={() => {
                  currentPage != 1 && setCurrentPage((prev) => prev - 1);
                }}
                className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center ${currentPage === 1
                  && "hover:bg-white !text-black/50 cursor-not-allowed"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width={24}
                  height={24}
                  className="rotate-180"
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                >
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
              {/* Page Numbers */}
              {paginationArr.map((pages, index) => (
                <button
                  onClick={() => setCurrentPage(pages)}
                  key={index}
                  className={` size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center ${currentPage === pages ? "bg-cyan-800 text-white" : ""
                    } `}
                >
                  {pages}
                </button>
              ))}
              {/* {Array.from({ length: numberOfPages }, (_, key) => key + 1).map(
 (pageNumber) => (
   // pageNumber <= maxPageNumberLimit &&
   // pageNumber > minPageNumberLimit && (
   <button
     onClick={() => setCurrentPage(pageNumber)}
     key={pageNumber}
     className={` size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center ${
       currentPage === pageNumber ? "bg-cyan-800 text-white" : ""
     } `}
   >
     {pageNumber}
   </button>
 )
 // )
)} */}
              {/* next */}
              <button
                onClick={() => {
                  currentPage != numberOfPages && setCurrentPage((prev) => prev + 1);
                }}
                className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center cursor-pointer ${currentPage === numberOfPages
                  && "hover:bg-white !text-black/50 cursor-not-allowed"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  width={24}
                  height={24}
                  strokeWidth={2}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  stroke="currentColor"
                >
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
              {/* Go to Last */}
              <button
                onClick={() => setCurrentPage(numberOfPages)}
                className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center ${currentPage === numberOfPages
                  && "hover:bg-white !text-black/50 cursor-not-allowed"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width={24}
                  height={24}
                  className="rotate-180"
                  strokeWidth={2}
                >
                  <path d="M11 7l-5 5l5 5" />
                  <path d="M17 7l-5 5l5 5" />
                </svg>
              </button>
            </div></>
        }


      </div>
    </div >
  );
};
export default UserTable;
