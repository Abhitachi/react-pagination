
const Table = (props) => {

    return(
        <table className="table text-center">
            <thead>
                <tr>
                    <th className="p-3">id</th>
                    <th className="p-3">firstName</th>
                    <th className="p-3">lastName</th>
                    <th className="p-3">email</th>
                    <th className="p-3">gender</th>
                    <th className="p-3">country</th>
                </tr>
            </thead>
            <tbody>
                {props.users.map(user => (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.country}</td>
                    </tr>
                ))}
            
            </tbody>
        </table>
    )
};

export default Table;
