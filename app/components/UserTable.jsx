const UserTable = ({ userData, tableHeading }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  let tableHeader = [];
  let ignoreFirstHeader = true;
  if (data) {
    var obj = data[0];
    for (var key in obj) {
      if (!ignoreFirstHeader) tableHeader.push(key);
      else ignoreFirstHeader = false;
    }
  }
  console.log(`data`, { data });
  return (
    <div className="mx-auto w-full max-w-4/5 rounded-lg px-8 py-6 text-black bg-white border border-zinc-200">
      <h1 className="text-3xl text-cyan-800 font-bold  pb-4">{tableHeading}</h1>
      <table className="w-full  rounded-lg overflow-hidden shadow-custom-shadow flex flex-col">
        <thead className="border-b border-zinc-100 bg-zinc-100">
          <tr className="*:py-3 *:px-6 *:grow *:basis-0 w-full text-left flex">
            {tableHeader.map((value, id) => (
              <th key={id}>{value}</th>
            ))}
          </tr>
        </thead>
        <tbody className="overflow-auto w-full h-full max-h-60vh">
          {data.map((value, id) => (
            <tr
              key={id}
              className="flex *:py-4 *:px-6 *:grow *:basis-0 border-b border-zinc-100"
            >
              {Object.values(value).slice(1).map((colData, index) => (
                <td key={index}>{colData}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
