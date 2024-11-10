/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import VariablesContext from "../../../../context/VariablesContext";

function UpdateBook() {
    // const [open, setOpen] = useState(true);
    const {
        openUpdate: open,
        setOpenUpdate: setOpen,
        updateId,
        updateItem,
        setTitle,
        releaseYear,
        setReleaseYear,
        newTitle,
        setNewTitle,
        updateTitle,
    } = useContext(VariablesContext);
    useEffect(() => {
        setNewTitle(updateItem?.title);
        setReleaseYear(updateItem?.release_year);
    }, [setNewTitle, setReleaseYear, setTitle, updateItem, updateItem.title]);

    return (
        <>
            <Dialog open={open} onClose={setOpen} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
                        >
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    updateTitle(updateId, releaseYear);
                                    // console.log(
                                    //     `------`,
                                    //     updateId,
                                    //     releaseYear,
                                    //     newTitle
                                    // );
                                }}
                            >
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600 sm:mx-0 sm:h-10 sm:w-10">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                // className="size-6"
                                                className="h-6 w-6 text-white"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                />
                                            </svg>
                                        </div>

                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <DialogTitle
                                                as="h3"
                                                className="text-base font-semibold text-gray-900"
                                            >
                                                Udpate Book
                                            </DialogTitle>

                                            <div className="mt-2">
                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="book_name"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Name
                                                        </label>

                                                        <div className="mt-2">
                                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                                <input
                                                                    id="book_name"
                                                                    name="book_name"
                                                                    type="text"
                                                                    placeholder=""
                                                                    autoComplete="off"
                                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setNewTitle(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                    value={
                                                                        newTitle !==
                                                                        undefined
                                                                            ? newTitle
                                                                            : ""
                                                                    }
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="sm:col-span-4">
                                                        <label
                                                            htmlFor="book_year"
                                                            className="block text-sm/6 font-medium text-gray-900"
                                                        >
                                                            Year
                                                        </label>

                                                        <div className="mt-2">
                                                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                                <input
                                                                    id="book_year"
                                                                    name="book_year"
                                                                    type="number"
                                                                    placeholder=""
                                                                    autoComplete="off"
                                                                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setReleaseYear(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                    value={
                                                                        releaseYear !==
                                                                        undefined
                                                                            ? releaseYear
                                                                            : ""
                                                                    }
                                                                    required
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="submit"
                                        onClick={(e) => {
                                            // addBook();
                                            // setOpen(false);
                                            // e.preventDefault();
                                            // updateTitle(updateId, releaseYear);
                                            // console.log(`ddd`, releaseYear);
                                        }}
                                        className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto"
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        data-autofocus
                                        onClick={() => {
                                            setOpen(false);
                                        }}
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}

export default UpdateBook;
