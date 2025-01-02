import "./Home.css";
import {
    AssignmentCell,
    ColorIdentificationCell,
} from "../components/Tables.jsx";
import { useContext, useEffect, useState } from "react";
import Form from "../components/Form.jsx";
import { useSearchParams } from "react-router-dom";
import { VariableContext } from "../components/VariableContext.jsx";

export default function Home() {
    const eisenhower = "./Eisenhower_Matrix.png";
    const [isImgVisible, setIsImgVisible] = useState(false);
    const [isFieldVisible, setIsFieldVisible] = useState(true);
    const [queryParameter] = useSearchParams();
    const { isFormVisible, toggleIsFormVisible } = useContext(VariableContext);

    const toggleImage = () => {
        setIsImgVisible((prev) => !prev);
    };
    const toggleField = () => {
        setIsFieldVisible((prev) => !prev);
    };

    if (localStorage.getItem("todos") == null) {
        localStorage.setItem("todos", "[]");
    }

    const todos = JSON.parse(localStorage.getItem("todos"));

    return (
        <>
            {isFormVisible && <Form />}
            <div
                className="container"
                style={isFormVisible ? { filter: "blur(3px)" } : {}}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <button onClick={toggleImage} id="toggleImageButton">
                        Eisenhower Matrix
                    </button>
                    {isImgVisible && (
                        <img src={eisenhower} width={"100%"} id="image" />
                    )}
                </div>
                <div>
                    <button id="toggleFieldButton" onClick={toggleField}>
                        Color Classification
                    </button>
                    {isFieldVisible && (
                        <table className="table__color">
                            <tbody>
                                <ColorIdentificationCell
                                    color="#ff0000"
                                    text="Mathemathics"
                                />
                                <ColorIdentificationCell
                                    color="#00ff00"
                                    text="Physics"
                                />
                                <ColorIdentificationCell
                                    color="#0000ff"
                                    text="Biology"
                                />
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="table__container">
                    <table className="table__assignment">
                        <thead>
                            <tr>
                                <th scope="col">Field</th>
                                <th scope="col">Description</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map((todo, index) => (
                                <AssignmentCell
                                    key={index}
                                    title={todo.title}
                                    description={todo.description}
                                    deadline={todo.deadline}
                                    category={todo.category}
                                    link={todo.id}
                                />
                            ))}
                            <tr>
                                <td colSpan={2}>Add Row</td>
                                <td colSpan={2}>
                                    <button
                                        className="table__addButton"
                                        onClick={toggleIsFormVisible}
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
