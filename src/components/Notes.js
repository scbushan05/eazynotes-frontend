const Notes = () => {
    const notes = [
        {
            id: 1,
            title: 'My first Note',
            body: 'My first note description'
        },
        {
            id: 2,
            title: 'My second Note',
            body: 'My second note description'
        },
        {
            id: 3,
            title: 'My third Note',
            body: 'My third note description'
        }
    ];
    return (
        <table border={1}>
            <tr>
                <th>Title</th>
                <th>Description</th>
            </tr>
            {
                notes.map(note => (
                    <tr key={note.id}>
                        <td>{note.title}</td>
                        <td>{note.body}</td>
                    </tr>
                ))
            }
        </table>
    );
}

export default Notes;