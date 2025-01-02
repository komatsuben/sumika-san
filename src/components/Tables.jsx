import "./Tables.css";
import { Link } from "react-router-dom";

export function ColorIdentificationCell({ color, text }) {
    return (
        <>
            <tr>
                <td
                    style={{
                        backgroundColor: `${color}`,
                        color: "transparent",
                    }}
                >
                    ___
                </td>
                <td>{text}</td>
            </tr>
        </>
    );
}

export function AssignmentCell({
    title,
    description,
    deadline,
    category,
    link,
}) {
    return (
        <>
            <tr>
                <th scope="row">
                    <Link to={`./${link}`}>{title}</Link>
                </th>
                <td>
                    <Link to={`./${link}`}>{description}</Link>
                </td>
                <td>
                    <Link to={`./${link}`}>{deadline}</Link>
                </td>
                <td>
                    <Link to={`./${link}`}>{category}</Link>
                </td>
            </tr>
        </>
    );
}
