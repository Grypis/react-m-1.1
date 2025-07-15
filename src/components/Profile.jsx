const Profile = (props) => {
  console.log('props:', props);
  
    return (
      <div>
        <h2>Name: { props.name}</h2>
        <p>Phone: {props.phone}</p>
        <p>Email: {props.email}</p>
        <p>Status: {props.status}</p>
      </div>
    )
}
  
export default Profile;