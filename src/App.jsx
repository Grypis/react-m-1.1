import Profile from "./components/Profile"

function App() {
  return (
    <div>

      <Profile
        name="Max"
        phone="123344131"
        email="123d@example.com"
        status="online"
      />

      <Profile
        name="Alax"
        phone="4412344131"
        email="1sdadd@example.com"
        status="offline"
      />
      {/* <Profile/>
      <Profile/> */}
      
   </div>
  )
}




export default App
