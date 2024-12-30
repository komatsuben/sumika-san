import "./Tables.css";
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

export function AssigmentCell({ title, description, deadline, category }) {
    return (
        <>
            <tr>
                <th scope="row">{title}</th>
                <td>{description}</td>
                <td>{deadline}</td>
                <td>{category}</td>
            </tr>
        </>
    );
}
