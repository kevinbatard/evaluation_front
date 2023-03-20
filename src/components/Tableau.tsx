export default function Tableau() {
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th className="border-bottom border-dark" scope="col">
                        #
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Nom
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Prix
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Quantité
                    </th>
                    <th className="border-bottom border-dark" scope="col">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td> */}
                </tr>
                <tr>
                    {/* <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td> */}
                </tr>
                <tr>
                    {/* <th scope="row">3</th>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td> */}
                </tr>
            </tbody>
        </table>
    );
}
