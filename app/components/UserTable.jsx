const UserTable = ({ userData, tableHeading, columns }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  // console.log("data", data);

  // To extract objects from `data` (an array of objects)
  for (var keys in data) {
    var dataObject = data[keys];
  }
  // To extract keys from extracted objects of `data`
  var dataKeys = Object.keys(dataObject);
  console.log("datakeys", dataKeys);

  return (
    <div className="mx-auto w-full max-w-4/5 rounded-lg px-8 py-6 text-black bg-white border border-zinc-200">
      <h1 className="text-3xl text-cyan-800 font-bold  pb-4">{tableHeading}</h1>
      <table className="w-full  rounded-lg overflow-hidden shadow-custom-shadow flex flex-col">
        <thead className="border-b border-zinc-100 bg-zinc-100">
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
              className="flex *:py-4 *:px-6 *:grow *:basis-0 border-b border-zinc-100"
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
