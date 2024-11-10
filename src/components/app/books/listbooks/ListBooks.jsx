/* eslint-disable no-unused-vars */
import {
    BriefcaseIcon,
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    CurrencyDollarIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useContext, useEffect, useState } from "react";
import VariablesContext from "../../../../context/VariablesContext";

function ListBooks() {
    const {
        books,
        setOpenCreate,
        setOpenUpdate,
        setUpdateId,
        setOpenDelete,
        setDeleteId,
    } = useContext(VariablesContext);

    return (
        <>
            <div className="listbooks">
                <div className="container mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-center lg:justify-between">
                        <div className="min-w-0 flex-1 my-10">
                            <h2 className="text-2xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                                List Books
                            </h2>
                        </div>

                        <div className="mt-5 flex lg:ml-4 lg:mt-0">
                            <span className="sm:ml-0">
                                <button
                                    type="button"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={() => {
                                        setOpenCreate(true);
                                        // setOpenUpdate(true);
                                    }}
                                >
                                    Add Book
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="ml-1.5 h-5 w-5"
                                        // className="size-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    </div>

                    <table className="table-fixed size-full text-left">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Years</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {books.length > 0 &&
                                books.map((book, index) => (
                                    <tr key={index}>
                                        <td>{book?.title}</td>

                                        <td>{book?.release_year}</td>

                                        <td>
                                            <span className="sm:ml-0">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    onClick={(e) => {
                                                        setOpenUpdate(true);
                                                        setUpdateId(book?.id);
                                                        // console.log(`change`);
                                                    }}
                                                >
                                                    Change Title
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className=" ml-1.5 h-5 w-5"
                                                        // className="size-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 4.5v15m7.5-7.5h-15"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>

                                            <span className="sm:ml-3">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                                    onClick={(e) => {
                                                        // setOpenUpdate(true);
                                                        // console.log(`change`);
                                                        setOpenDelete(true);
                                                        setDeleteId(book?.id);
                                                    }}
                                                >
                                                    Delete
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="ml-1.5  h-5 w-5"
                                                        // className="size-6"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M12 4.5v15m7.5-7.5h-15"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListBooks;
