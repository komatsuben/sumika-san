import "./Home.css";
import {
    AssigmentCell,
    ColorIdentificationCell,
} from "../components/Tables.jsx";
import { useContext, useEffect, useState } from "react";
import Form from "../components/Form.jsx";
import { VariableContext } from "../components/VariableContext.jsx";

export default function Home() {
    const eisenhower = "./Eisenhower_Matrix.png";
    const [isImgVisible, setIsImgVisible] = useState(false);
    const [isFieldVisible, setIsFieldVisible] = useState(true);

    const { isFormVisible, toggleIsFormVisible } = useContext(VariableContext);
    const [todo, setTodo] = useState([]);
    const [newTodo, setNewTodo] = useState({
        title: "",
        description: "",
        deadline: "",
        category: "",
    });

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodo(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo]);

    const toggleImage = () => {
        setIsImgVisible((prev) => !prev);
    };
    const toggleField = () => {
        setIsFieldVisible((prev) => !prev);
    };
    // const handleAddRow = () => {
    //     setIsFormVisible((prev) => !prev);
    // };

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
                            <AssigmentCell
                                title={``}
                                description={``}
                                deadline={``}
                                categorys={``}
                            />
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
