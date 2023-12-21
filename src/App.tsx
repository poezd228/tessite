import './App.css'


function App() {
    const contacts = ["Контакт 1", "Контакт 2", "Контакт 3"];
    return (
        <>
            <div className="sidebar">
                <ul className="contact-list">
                    {contacts.map((contact, index) => (
                        <li key={index}>{contact}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
