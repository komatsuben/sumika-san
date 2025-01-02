import "./Form.css";
import { useContext } from "react";
import { VariableContext } from "./VariableContext";

export default function Form() {
    const { isFormVisible, toggleIsFormVisible } = useContext(VariableContext);
    function handleSubmit(e) {
        e.preventDefault(); // Prevent default form submission

        const formData = new FormData(e.target);
        const id = JSON.parse(localStorage.getItem("todos")).length;
        const title = formData.get("title");
        const description = formData.get("description");
        const deadline = formData.get("deadline");
        const category = formData.get("category");

        const newTodo = { id, title, description, deadline, category };

        const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

        const updatedTodos = [...existingTodos, newTodo];
        console.log(updatedTodos);

        localStorage.setItem("todos", JSON.stringify(updatedTodos));

        const query = new URLSearchParams(newTodo).toString();

        // Redirect to the URL with query parameters
        window.location.href = `${window.location.origin}?${query}`;
    }

    return (
        <>
            <div className="dimmer">a</div>
            <div className="popup__container">
                <div className="popup__content">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <h1>New Task</h1>
                        <button
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                fontSize: "1.5rem",
                                backgroundColor: "transparent",
                                border: "none",
                            }}
                            onClick={toggleIsFormVisible}
                        >
                            <i className="ri-close-circle-line"></i>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Title" name="title" />
                        <input
                            type="text"
                            placeholder="Description"
                            name="description"
                        />
                        <input
                            type="date"
                            placeholder="Deadline"
                            name="deadline"
                        />
                        <select name="category" id="category">
                            <option value="Do it now">Do it now</option>
                            <option value="Delegate">Delegate</option>
                            <option value="Decide">Decide</option>
                            <option value="Delete">Delete</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
