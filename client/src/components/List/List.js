import { Navigate, useLocation  } from 'react-router-dom'
import cookie from 'js-cookie'
import { useEffect, useState } from 'react';
import axios from 'axios';

const List = () => {
  const { pathname } = useLocation()
  const [authen,setAuthen] = useState(null)
  const auth = cookie.get('token');
  const [User,SetUser] = useState({})

   useEffect(() => {

     
          async function VerifyUser() {
              const request = await axios.get('http://localhost:3001/api/user/private', {
                  headers: {
                      "Content-Type": "application/json",
                      "Authorization": `Bearer ${auth}`
                  }
              })
              if(request.data){
                  let s = request.data?.success
                  setAuthen(s)
                  let user = request.data?.user
                  if(user){
                    SetUser(user)
                  }
              }
          }
          VerifyUser()
      

  }, [auth])
  
 
  return ( 
    <div>
      List
    </div>
   );
}
 
export default List;