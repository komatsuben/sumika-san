import "./Home.css";
import {
    AssigmentCell,
    ColorIdentificationCell,
} from "../components/Tables.jsx";

export default function Home() {
    const eisenhower = "./Eisenhower_Matrix.png";
    return (
        <>
            <div className="container">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={eisenhower} width={"100%"} />
                </div>
                <table className="table__color">
                    <ColorIdentificationCell />
                </table>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
