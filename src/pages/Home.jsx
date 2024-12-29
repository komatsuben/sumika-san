import "./Home.css";
import {
    AssigmentCell,
    ColorIdentificationCell,
} from "../components/Tables.jsx";
import { useRef, useState } from "react";

export default function Home() {
    const eisenhower = "./Eisenhower_Matrix.png";
    const [isImgVisible, setIsImgVisible] = useState(false);
    const [isFieldVisible, setIsFieldVisible] = useState(true);

    const imageRef = useRef(null);
    const fieldRef = useRef(null);

    const toggleImage = () => {
        setIsImgVisible((prev) => !prev);
    };

    const toggleField = () => {
        setIsFieldVisible((prev) => !prev);
    };

    return (
        <>
            <div className="container">
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
                        <img
                            src={eisenhower}
                            width={"100%"}
                            id="image"
                            ref={imageRef}
                        />
                    )}
                </div>
                <div>
                    <button id="toggleFieldButton" onClick={toggleField}>
                        Color Classification
                    </button>
                    {isFieldVisible && (
                        <table className="table__color" ref={fieldRef}>
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
                            <tr>
                                <AssigmentCell />
                            </tr>
                            <tr>
                                <td colSpan={2}>Add Row</td>
                                <td colSpan={2}>
                                    <button className="table__addButton">
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
