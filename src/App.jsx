/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Header from "./ui/header/Header";
import ListBooks from "./components/app/books/listbooks/ListBooks";
import CreateBook from "./components/app/books/createbook/CreateBook";
import VariablesContext from "./context/VariablesContext";
import { apiLink } from "./utils/variables";
import UpdateBook from "./components/app/books/updatebook/UpdateBook";
import DeleteBook from "./components/app/books/deletebook/DeleteBook";

function App() {
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState(0);

    const [newTitle, setNewTitle] = useState("");

    const [openCreate, setOpenCreate] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const [updateId, setUpdateId] = useState(false);
    const [updateItem, setUpdateItem] = useState(false);
    const [deleteId, setDeleteId] = useState(0);

    useEffect(() => {
        fetchBooks();
        detailsBook();
    }, [updateId, deleteId]);

    const fetchBooks = async () => {
        try {
            const response = await fetch(`${apiLink}books/`);
            const data = await response.json();
            setBooks(data);
        } catch (err) {
            console.log(err);
        }
    };

    const addBook = async (e) => {
        e.preventDefault();

        const bookData = {
            title,
            release_year: releaseYear,
        };
        try {
            const response = await fetch(`${apiLink}books/create/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            });

            const data = await response.json();
            setBooks((prev) => [...prev, data]);
            setOpenCreate(false);
        } catch (err) {
            console.log(err);
        }
    };

    const detailsBook = async (e) => {
        try {
            const response = await fetch(
                `${apiLink}books/${updateId || deleteId || ""}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = await response.json();
            setUpdateItem(data);
            // console.log(`--`, updateId);
            // console.log(`ee`, data);
            // setBooks(data);
        } catch (err) {
            console.log(err);
        }
    };

    const updateTitle = async (pk, release_year) => {
        const bookData = {
            title: newTitle,
            release_year,
        };
        try {
            const response = await fetch(`${apiLink}books/${pk}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookData),
            });

            const data = await response.json();
            setBooks((prev) =>
                prev.map((book) => {
                    if (book.id === pk) {
                        return data;
                    } else {
                        return book;
                    }
                })
            );
            setOpenUpdate(false);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteBook = async (pk) => {
        try {
            const response = await fetch(`${apiLink}books/${pk}`, {
                method: "DELETE",
            });

            setBooks((prev) => prev.filter((book) => book.id !== pk));
            setOpenDelete(false);
        } catch (err) {
            console.log(err);
        }
    };

    // console.log(`eeem`, books);

    return (
        <>
            <VariablesContext.Provider
                value={{
                    books,
                    setBooks,
                    openCreate,
                    setOpenCreate,
                    openUpdate,
                    setOpenUpdate,
                    updateId,
                    setUpdateId,
                    updateItem,
                    setUpdateItem,
                    title,
                    setTitle,
                    releaseYear,
                    setReleaseYear,
                    newTitle,
                    setNewTitle,
                    addBook,
                    updateTitle,
                    deleteBook,
                    openDelete,
                    deleteId,
                    setDeleteId,
                    setOpenDelete,
                }}
            >
                <Header />
                <ListBooks />
                <CreateBook />
                <UpdateBook />
                <DeleteBook />
            </VariablesContext.Provider>
        </>
    );
}

export default App;
