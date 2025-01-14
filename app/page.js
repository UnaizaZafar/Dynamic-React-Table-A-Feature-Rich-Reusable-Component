import UserTable from "./components/UserTable";

const userColumnsHeader = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Phone", key: "phone" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" },
  { label: "Address", key: "address" },
];
const dummyUserData = {
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
const productColumnsHeader = [
  { label: "Product Name", key: "productName" },
  { label: "Category", key: "category" },
  { label: "Price", key: "price" },
  { label: "In Stock", key: "inStock" },
];
const dummyProductData = [
  {
    productId: 101,
    productName: "Widget A",
    category: "Tools",
    price: 19.99,
    inStock: true,
  },
  {
    productId: 102,
    productName: "Widget B",
    category: "Tools",
    price: 25.49,
    inStock: false,
  },
  {
    productId: 103,
    productName: "Gadget X",
    category: "Electronics",
    price: 49.99,
    inStock: true,
  },
  {
    productId: 104,
    productName: "Gadget Y",
    category: "Electronics",
    price: 89.99,
    inStock: false,
  },
  {
    productId: 105,
    productName: "Widget C",
    category: "Tools",
    price: 22.99,
    inStock: true,
  },
  {
    productId: 106,
    productName: "Gadget Z",
    category: "Electronics",
    price: 59.99,
    inStock: true,
  },
  {
    productId: 107,
    productName: "Gadget W",
    category: "Electronics",
    price: 39.99,
    inStock: true,
  },
  {
    productId: 108,
    productName: "Widget D",
    category: "Tools",
    price: 29.99,
    inStock: false,
  },
];
export default function Home() {
  return (
    <>
      <div className="bg-cyan-900 max-h-[calc(100vh-350px)] h-full  py-10">
        <h1 className="text-5xl text-white font-bold py-10 text-center ">
          Reusable Table Component
        </h1>
        <div className="flex flex-col gap-8 pb-8 w-full">
          <UserTable
            userData={dummyUserData}
            tableHeading={"User Data Table"}
            columns={userColumnsHeader}
          />
          <UserTable
            userData={dummyProductData}
            tableHeading={"Product Data Table"}
            columns={productColumnsHeader}
          />
        </div>
      </div>
    </>
  );
}
