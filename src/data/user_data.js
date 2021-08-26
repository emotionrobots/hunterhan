import React from "react";

export const UsersContext= React.createContext();

// TODO: Import things related to getting data from MQTT

/*
User Data Formatting


*/

// export const useUsers = () => {
//     const [users, setUsers] = useState([]);
  
//     const getUsers = () =>{
//       //your fetch
//     }
  
//     useEffect(()=>{ //equivalent to componentDidMount
//       getUsers();
//     }, [])
  
//     return {users, setUsers}
// }

export function getUsername(callback){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'plain/text' },
    };
    //TODO: Communicate with MQTT servers

    // Temporarily use CORS anywhere
    fetch('https://cors-anywhere.herokuapp.com/https://pc3-backend.e-motion.ai/', requestOptions)
        .then(res => res.text())
        .then(data => callback(data))
}

export function getOrganizations(){
    return [
        "My Groups",
        "Yummy",
        "Clements",
        "New One"
    ]
}