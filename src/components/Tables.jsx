import "./Tables.css";
export function ColorIdentificationCell({ color, text }) {
    return (
        <>
            <tr>
                <td
                    style={{
                        backgroundColor: `${ color }`,
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

export function AssigmentCell({ title, deadline, category }) {
    return (
        <>
            <th scope="row">Ca</th>
            <td>Ca</td>
            <td>Ca</td>
            <td>Ca</td>
        </>
    );
}
