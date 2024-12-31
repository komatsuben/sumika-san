import { useState } from "react";

import Navbar from "./components/Navbar";
import { VariableProvider } from "./components/VariableProvider";

function App() {
    return (
        <>
            <VariableProvider>
                <Navbar />
            </VariableProvider>
        </>
    );
}

export default App;
