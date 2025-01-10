const UserTable = ({ userData }) => {
  const data = Array.isArray(userData) ? userData : userData.data;
  return (
    <div className="mx-auto w-4/5 rounded-xl overflow-hidden">
      <table className="w-full bg-blue-50 rounded-xl shadow-custom-shadow flex flex-col">
        <thead className="text-lg">
          <tr className="*:py-3 *:px-6 *:grow *:basis-0 bg-blue-900 text-white w-full text-left flex ">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody className="overflow-auto w-full" style={{ height: "60vh" }}>
          {data.map((user, id) => (
            <tr
              key={id}
              className="shadow-sm flex *:py-3 *:px-6 *:grow *:basis-0"
            >
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
