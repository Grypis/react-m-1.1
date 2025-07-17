const Profile = ({name, phone, email, status = "offline", hasPhisicalAddress}) => {
    return (
      <div
        style={{
       padding: "20px 10px",
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "10px",
        color: "black",
      }} className="profile">
        <h2>Name: {name} {hasPhisicalAddress && "🏠"}</h2>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <p>Status: {status === "online" ? "😍" : "😶‍🌫️"}  </p>
      </div>
    ) 
}
  
export default Profile;