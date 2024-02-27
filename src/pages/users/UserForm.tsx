import { useParams } from 'react-router-dom'

const UserForm = () => {
    const user_id = useParams().id;
  return (
    <div>UserForm {user_id}</div>
  )
}

export default UserForm