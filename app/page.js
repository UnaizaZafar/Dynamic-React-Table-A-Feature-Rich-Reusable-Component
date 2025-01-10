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
    <div className="">
     
      <h1 className="text-4xl text-neutral-700 font-bold bg-blue-50 py-8 px-10 shadow-sm">
        Reusable Table Component
      </h1>
      <div className=" p-8 px-16">
        <UserTable userData={dummyData.data} />
      </div>
    </div>
   
  );
}
