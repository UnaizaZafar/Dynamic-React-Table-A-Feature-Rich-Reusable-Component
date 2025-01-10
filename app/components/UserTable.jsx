const UserTable = ({ userData }) => {
  return (
    <table className="table-fixed w-full backdrop-blur-md bg-blue-50  border-collapse shadow-custom-shadow">
      <thead className="text-lg p-8 sticky top-0 ">
        <tr className=" bg-blue-900 text-white">
          <th className="py-3">First Name</th>
          <th className="py-3">Last Name</th>
          <th className="py-3">Phone</th>
          <th className="py-3">Email</th>
          <th className="py-3">Age</th>
          <th className="py-3">Address</th>
        </tr>
      </thead>
      <tbody
        className="overflow-y-scroll text-center w-full text-black"
        style={{ height: "75vh" }}
      >
        {userData.map((user, id) => (
          <tr
            key={id}
            className=" shadow-sm"
          >
            <td className="py-3">{user.firstName}</td>
            <td className="py-3">{user.lastName}</td>
            <td className="py-3">{user.phone}</td>
            <td className="py-3">{user.email}</td>
            <td className="py-3">{user.age}</td>
            <td className="py-3">{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
