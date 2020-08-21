import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux/user/userActions';

const UserContainer = ({fetchUsers, userData, error  })=>{
    useEffect(()=>{
        fetchUsers()
    }, [])
    return userData.loading ? (
        <h2>Loading....</h2>
    ) : userData.error ?(
        <h2>{error.message}</h2>
    ) : (
        <div>
            <h2>List of Users</h2>
            {
                userData && 
                userData.users &&
                userData.users.map(user=><p>{user.name}</p>)
            }
        </div>
    )
}
const mapStateToProps = state=>{
    return {
        userData: state.user   
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        fetchUsers: ()=>dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer); 