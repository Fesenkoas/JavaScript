import React, {useState} from 'react'
import { changePassword, editUser } from '../../utils/constant'
import ChangePassword from './ChangePassword'
import EditUser from './EditUser'

const UpdateUser = () => {
    const [updateAction, setUpdateAction] = useState<typeof changePassword|'editUser'|''>('')
 switch(updateAction){
    case editUser:
    return<EditUser close={()=>{setUpdateAction('')}}/>
    case changePassword:
    return<ChangePassword close={()=>{setUpdateAction('')}}/>
    default:
        return (
            <div>
        <button onClick={()=>setUpdateAction(changePassword)}>Change Password</button>
        <button onClick={()=>setUpdateAction(editUser)}>Edit User Profile</button>
            </div>
          )
 }
}

export default UpdateUser