//! &&
/* const Mailbox = ({ username, message }) => {
    return (
        <><p>Hello {username}</p>
            {message.length > 0 && (<p>You have {message.length} unread messages</p>
            )}
        </>
        
    );
}; */


//! тернарний оператор
/* const Mailbox = ({ name, unreadMessage }) => {
    return (
        <div>
            <p>Hello {name}</p>
            <p>
                {unreadMessage.lenght > 0 ? `You have ${unreadMessage.lenght} unread message` : "No unread messages"}
            </p>
        </div>
    );
}; */

const Mailbox = ({ username, message }) => {
    return (
        <div>
            <p>Hello {username}</p>
            {message.lenght > 0 ? (
                <div>
                    <p>You have ${message.lenght} unread message</p>
                    <MessageList message={message}/>
                </div>
            ) : (
                    <p>No unread messages</p>
            )}   
        </div>
    );
};