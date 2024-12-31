import "./Form.css";
import { useContext } from "react";
import { VariableContext } from "./VariableContext";

export default function Form() {
    const { isFormVisible, toggleIsFormVisible } = useContext(VariableContext);
    return (
        <>
            <div className="dimmer">a</div>
            <div className="popup__container">
                <div className="popup__content">
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
                        <i class="ri-close-circle-line"></i>
                    </button>
                </div>
                <div className="popup__content">
                    <form action="">
                        <input type="text" placeholder="Title" />
                    </form>
                </div>
            </div>
        </>
    );
}
