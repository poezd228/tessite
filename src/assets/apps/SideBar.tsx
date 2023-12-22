import '../css/App.css'
import { useEffect, useState } from 'react';



// function Chat(string UserId){
//
//
//
// }


function SideBar() {
    const [contacts, setContacts] = useState<string[]>([]);

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080/ws");

        ws.onopen = () => {
            console.log("Connected to the WebSocket");
        };

        ws.onmessage = (event) => {
            try {
                // Десериализация JSON в массив строк
                const data = JSON.parse(event.data);
                setContacts(data);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        };

        ws.onclose = () => {
            console.log("Disconnected from the WebSocket");
        };

        return () => {
            ws.close();
        };
    }, []);
    // return (
    //     <div>
    //         <p>Message from Go: {message}</p>
    //     </div>
    // );


    // const contacts = ["Контакт 1", "Контакт 2", "Контакт 3"];
    return (
        <>
            <div className="sidebar">
                <ul className="contact-list">
                    {contacts.map((contact, index) => (
                        <li key={index}>{contact}

                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default SideBar
