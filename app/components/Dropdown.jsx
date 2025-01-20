'use client'
import { useState } from "react"
const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRows, setSelectedRows] = useState(10);
    const rows = [10, 20, 50];
   
    const handleSelect = (rows) => {
        setSelectedRows(rows);
        setIsOpen(false);
    }
    return (
        <>
            <div className=" flex gap-2 items-center w-full">
                <h1 className="text-sm">Number of Rows</h1>
                <div className="relative">
                    <button className=" border rounded border-gray-300 px-8 py-0.5 shadow-sm  bg-white font-medium text-cyan-800 hover:bg-gray-50"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {selectedRows}
                    </button>
                    {isOpen && (
                        <div className=" absolute rounded-md shadow-lg bg-white ">
                            {rows.map((row, index) => (
                                <button className="block px-8 py-2
                                text-sm text-black
                                hover:bg-gray-100 w-full" key={index} onClick={() => handleSelect(row)}>
                                    {row}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Dropdown