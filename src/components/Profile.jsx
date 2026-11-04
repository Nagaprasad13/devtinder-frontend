import { useSelector } from "react-redux"
export const Profile = () => {
  const user=useSelector((store)=>store.user);
  return (
    <>
    <div>Profile</div>
    <div>{user?.lastName}</div></>
  )
}
