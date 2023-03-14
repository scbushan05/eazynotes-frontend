import { useEffect, useState } from "react";
import { readAll } from "../services/notes.service";

const Notes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        readAll()
            .then(response => {
                console.log(`Received the response from API ${response.data}`);
                setNotes(response.data);
            }).catch(error => {
                console.log(`Error occured ${error}`);
            })
    }, []);

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