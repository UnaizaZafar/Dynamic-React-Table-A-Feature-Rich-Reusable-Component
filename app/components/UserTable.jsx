"use client";
import { useState } from "react";

const UserTable = ({ userData, tableHeading, columns }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  const [currentPage, setCurrentPage] = useState(1); //to be at the 1st page when page loads
  // const rowsPerPage = 6;
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const lastIndex = currentPage * rowsPerPage; //getting the index of last row on selected page
  const startIndex = lastIndex - rowsPerPage;
  const numberOfPages = Math.ceil(data.length / rowsPerPage); // divide total data with rows to get number of pages on which the data is divided
  const records = data.slice(startIndex, lastIndex);
  function nextPage() {
    if (currentPage != numberOfPages) {
      // if its not on the last page then move forwards
      setCurrentPage((prev) => prev + 1);
    }
  }

  function prevPage() {
    if (currentPage != 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  return (
    <div className="mx-auto w-full max-w-4/5 rounded-lg px-8 py-6 text-black bg-white border border-zinc-200">
      <h1 className="text-3xl text-cyan-800 font-bold  pb-4">{tableHeading}</h1>
      <div className="flex gap-2 mb-2 items-center justify-end">
        <h3 className="font-medium">Number of Rows: </h3>
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
      <div className="flex gap-3 mt-4 justify-end">
        {/* previous */}
        <svg
          onClick={() => {
            currentPage != 1 && setCurrentPage((prev) => prev - 1);
          }}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          className="size-5 rotate-180 cursor-pointer"
          viewBox="0 0 299 511.517"
        >
          <path
            fill="#000"
            d="M12.579 436.254c-36.893 64.703 15.581 96.095 51.926 60.146L273.92 295.723c33.44-33.439 33.44-46.49 0-79.93L64.505 15.117C28.16-20.832-24.314 10.56 12.579 75.262l97.261 180.496-97.261 180.496z"
          />
        </svg>
        <h3>
          {currentPage}/{numberOfPages}
        </h3>
        {/* next */}
        <svg
          onClick={() => {
            currentPage != numberOfPages && setCurrentPage((prev) => prev + 1);
          }}
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
          imageRendering="optimizeQuality"
          fillRule="evenodd"
          clipRule="evenodd"
          className="size-5 cursor-pointer"
          viewBox="0 0 299 511.517"
        >
          <path
            fill="#000"
            d="M12.579 436.254c-36.893 64.703 15.581 96.095 51.926 60.146L273.92 295.723c33.44-33.439 33.44-46.49 0-79.93L64.505 15.117C28.16-20.832-24.314 10.56 12.579 75.262l97.261 180.496-97.261 180.496z"
          />
        </svg>
      </div>
    </div>
  );
};
export default UserTable;
