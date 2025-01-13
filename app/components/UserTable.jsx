const UserTable = ({ userData, tableHeading }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  function traverse(obj) {
    Object.keys(obj).forEach((key) => {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key]); // Recursively handle nested objects
      } else {
        console.log(`${key}: ${obj[key]}`);
      }
    });
  }
  return (
    <div className="mx-auto w-full max-w-4/5 rounded-lg px-8 py-6 text-black bg-white border border-zinc-200">
      <h1 className="text-3xl text-cyan-800 font-bold  pb-4">{tableHeading}</h1>
      <table className="w-full  rounded-lg overflow-hidden shadow-custom-shadow flex flex-col">
        <thead className="border-b border-zinc-100 bg-zinc-100">
          <tr className="*:py-3 *:px-6 *:grow *:basis-0 w-full text-left flex">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className="overflow-auto w-full h-full max-h-60vh">
          {data.map((user, id) => (
            <tr
              key={id}
              className="flex *:py-4 *:px-6 *:grow *:basis-0 border-b border-zinc-100"
            >
              <td>{user[Object.keys(user)[1]]}</td>
              <td>{user[Object.keys(user)[2]]}</td>
              <td>{user[Object.keys(user)[3]]}</td>
              <td>{user[Object.keys(user)[4]]}</td>
              <td>{user[Object.keys(user)[5]]}</td>
              <td>{user[Object.keys(user)[6]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
