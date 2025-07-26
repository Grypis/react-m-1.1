import clsx from 'clsx';
import css from './Profile.module.css';

const Profile = ({
  name,
  phone,
  email,
  status = "offline",
  hasPhisicalAddress
}) => {
console.log("css: ", css);

  /* const className = ["profile"];

  if (hasPhisicalAddress) {
    className.push("hasPhisicalAddress");
  } */
    return (
      <div
        /* className={`profile ${hasPhisicalAddress ? "hasPhisicalAddress" : ""}`}> */
        /* className={className.join(" ")}> */
      /* className={clsx("profile", hasPhisicalAddress && "hasPhisicalAddress")}> */
        /* className={clsx("profile", {
        "hasPhisicalAddress" : hasPhisicalAddress === true
      })}> */
      className={clsx(css.profile, hasPhisicalAddress && css.hasPhisicalAddress)}>
        <h2 className={css.title}>Name: {name} {hasPhisicalAddress && "🏠"}</h2>
        <p className={css.fieldRow}>Phone: {phone}</p>
        <p className={css.fieldRow}>Email: {email}</p>
        <p className={css.fieldRow}>Status: {status === "online" ? "😍" : "😶‍🌫️"}  </p>
      </div>
    ) 
}
  
export default Profile;