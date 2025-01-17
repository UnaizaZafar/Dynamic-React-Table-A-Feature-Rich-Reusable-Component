"use client";
import { useState, useEffect } from "react";

const UserTable = ({ userData, tableHeading, columns }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  const [currentPage, setCurrentPage] = useState(1); //to be at the 1st page when page loads
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const lastIndex = currentPage * rowsPerPage; //getting the index of last row on selected page
  const startIndex = lastIndex - rowsPerPage;
  const numberOfPages = Math.ceil(data.length / rowsPerPage); // divide total data with rows to get number of pages on which the data is divided
  const records = data.slice(startIndex, lastIndex);
  // const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
  return (
    <div className="mx-auto w-full max-w-4/5 rounded-lg px-8 py-6 text-black bg-white border border-zinc-200">
      <h1 className="text-3xl text-cyan-800 font-bold  pb-4">{tableHeading}</h1>
      <div className="flex gap-2 mb-2 items-center justify-end">
        <h3 className="font-medium text-sm">Number of Rows: </h3>
        <input
          type="number"
          value={rowsPerPage}
          min={1}
          max={10}
          onChange={() => setRowsPerPage(event.target.value)}
          className="border pl-2 py-1"
        />
      </div>
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
                    {obj.inStock === true ? (
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
                        <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
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
                        <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
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

      {/* PAGINATION */}
      <div className="flex gap-3 mt-4 justify-end items-center">
        {/* Got to first */}
        <button
          onClick={() => {
            setCurrentPage(1);
          }}
          className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center  ${
            currentPage === 1
              ? "hover:bg-white !text-black/50 cursor-not-allowed"
              : ""
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
            // (currentPage - 1) % pageNumberLimit == 0 &&
            //   setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit) &&
            //   setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
          }}
          className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center ${
            currentPage === 1
              ? "hover:bg-white !text-black/50 cursor-not-allowed"
              : ""
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

        {Array.from({ length: numberOfPages }, (_, key) => key + 1).map(
          (pageNumber) =>
            pageNumber <= maxPageNumberLimit &&
            pageNumber > minPageNumberLimit && (
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
        )}
        {/* next */}
        <button
          onClick={() => {
            currentPage != numberOfPages && setCurrentPage((prev) => prev + 1);
            // currentPage + 1 > maxPageNumberLimit
            //   ? setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit)
            //   : ""
            //   ? setminPageNumberLimit(minPageNumberLimit + pageNumberLimit)
            //   : "";
          }}
          className={`Fsize-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center cursor-pointer ${
            currentPage === numberOfPages
              ? "hover:bg-white !text-black/50 cursor-not-allowed"
              : ""
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
          className={`size-8 border rounded border-gray-300 p-1 hover:bg-cyan-800 hover:text-white justify-items-center ${
            currentPage === numberOfPages
              ? "hover:bg-white !text-black/50 cursor-not-allowed"
              : ""
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
      </div>
    </div>
  );
};
export default UserTable;
