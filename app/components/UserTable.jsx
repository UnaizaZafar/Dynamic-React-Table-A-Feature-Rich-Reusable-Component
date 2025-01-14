const UserTable = ({ userData, tableHeading, columns }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  for (let stock of data) {
    if (stock.inStock) {
      stock.inStock = (
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
      );
    } else {
      stock.inStock = (
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
      );
    }
  }
  console.log(data);
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
          {data.map((obj, id) => (
            <tr
              key={id}
              className="flex *:py-4 *:px-6 *:grow *:basis-0 border-b border-zinc-0"
            >
              {columns.map((col, id) => (
                <td key={id}>{obj[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
