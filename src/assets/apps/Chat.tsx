import '../css/chat.css'


function Chat() {
    const massages = ["Сообщение 1", "Сообщение 2", "Сообщение 3"]
    return (<>
        <div className="ChatWindow">
            <ul className="Massages">
                {massages.map((massage, index) => (
                    <li key={index}>{massage}

                    </li>
                ))}
            </ul>
        </div>
    </>)


}
export default Chat