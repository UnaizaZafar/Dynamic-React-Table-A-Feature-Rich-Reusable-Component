import UserTable from "./components/UserTable";
const dummyData = {
  data: Array.from({ length: 32 }, (_, i) => ({
    id: i,
    firstName: `First ${i + 1}`,
    lastName: `Last ${i + 1}`,
    phone: `12345678${(90 + i).toString().padStart(2, "0")}`,
    email: `test${i + 1}@test.com`,
    age: 25 + (i % 10), // Ages vary between 25-34
    address: `Test Address ${i + 1}`,
  })),
  total: 32,
};
export default function Home() {
  return (
    <div
      className={
        " flex flex-col gap-6 justify-center items-center h-full w-full p-16 bg-white bg-opacity-40 "
      }
    >
      {/* <div className="bg-gray-100 w-full rounded-xl overflow-hidden"> */}
        <h1 className="text-4xl text-black  font-medium p-6 bg-white">
          Reusable Table Component
        </h1>
        <UserTable userData={dummyData.data} />
      {/* </div> */}
    </div>
  );
}
