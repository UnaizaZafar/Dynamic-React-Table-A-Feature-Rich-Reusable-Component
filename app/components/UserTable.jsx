const UserTable = ({ userData }) => {
    return (
      <table className="text-black relative table-fixed w-full bg-white/50 backdrop-blur-md h-96 overflow-scroll">
        <thead className="text-lg p-8 sticky top-0 border border-white/10">
          <tr>
            <th className=" bg-pink-600 text-slate-100 py-3  ">
              First Name
            </th>
            <th className=" bg-pink-600 text-slate-100 py-3  ">
              Last Name
            </th>
            <th className=" bg-pink-600 text-slate-100 py-3  ">
              Phone
            </th>
            <th className=" bg-pink-600 text-slate-100 py-3  ">
              Email
            </th>
            <th className=" bg-pink-600 text-slate-100 py-3  ">
              Age
            </th>
            <th className=" bg-pink-600 text-slate-100 py-3  ">
              Address
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {userData.map((user, id) => (
            <tr key={id} className="border border-white/10">
              <td className="py-3  ">{user.firstName}</td>
              <td className="py-3  ">{user.lastName}</td>
              <td className="py-3  ">{user.phone}</td>
              <td className="py-3  ">{user.email}</td>
              <td className="py-3  ">{user.age}</td>
              <td className="py-3  ">{user.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default UserTable;
  