import { useState } from "react";
import { VariableContext } from "./VariableContext";

export function VariableProvider({ children }) {
    const [isFormVisible, setIsFormVisible] = useState(false);
    function toggleIsFormVisible() {
        setIsFormVisible((prev) => !prev);
    }
    return (
        <VariableContext.Provider
            value={{ isFormVisible, toggleIsFormVisible }}
        >
            {children}
        </VariableContext.Provider>
    );
}
