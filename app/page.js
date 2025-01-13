import UserTable from "./components/UserTable";

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

const dummyProductData = [
  {
    productId: 101,
    productName: "Widget A",
    category: "Tools",
    price: 19.99,
    inStock: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={0}
          height={0}
          viewBox="0 0 64 64"
          className="size-6"
        >
          <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
        </svg>
      </>
    ),
  },
  {
    productId: 102,
    productName: "Widget B",
    category: "Tools",
    price: 25.49,
    inStock: (
      <>
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
      </>
    ),
  },
  {
    productId: 103,
    productName: "Gadget X",
    category: "Electronics",
    price: 49.99,
    inStock: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={0}
          height={0}
          viewBox="0 0 64 64"
          className="size-6"
        >
          <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
        </svg>
      </>
    ),
  },
  {
    productId: 104,
    productName: "Gadget Y",
    category: "Electronics",
    price: 89.99,
    inStock: (
      <>
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
      </>
    ),
  },
  {
    productId: 105,
    productName: "Widget C",
    category: "Tools",
    price: 22.99,
    inStock: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={0}
          height={0}
          viewBox="0 0 64 64"
          className="size-6"
        >
          <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
        </svg>
      </>
    ),
  },
  {
    productId: 106,
    productName: "Gadget Z",
    category: "Electronics",
    price: 59.99,
    inStock: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={0}
          height={0}
          viewBox="0 0 64 64"
          className="size-6"
        >
          <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
        </svg>
      </>
    ),
  },
  {
    productId: 107,
    productName: "Gadget W",
    category: "Electronics",
    price: 39.99,
    inStock: (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={0}
          height={0}
          viewBox="0 0 64 64"
          className="size-6"
        >
          <path d="M27 55L6 33 9 29 26 41 55 12 59 16z"></path>
        </svg>
      </>
    ),
  },
  {
    productId: 108,
    productName: "Widget D",
    category: "Tools",
    price: 29.99,
    inStock: (
      <>
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
      </>
    ),
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
          />
          <UserTable
            userData={dummyProductData}
            tableHeading={"Product Data Table"}
          />
        </div>
      </div>
    </>
  );
}
