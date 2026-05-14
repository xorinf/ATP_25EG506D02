import User from "./User";
import { usersData } from "../data/usersData";

function UserList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {
                usersData.map(userObj => <User key={userObj.email} userObj={userObj} /> )
            }
        </div>
    )
}

export default UserList;