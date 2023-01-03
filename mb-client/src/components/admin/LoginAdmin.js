import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../App.css"

function LoginAdmin() {
        const navigate = useNavigate()

        const [userName, setUsername] = useState("")
        const [password, setPassword] = useState("")

        const handleClick = () => {
                console.log(userName,password)
                axios.post("http://localhost:5000/admin/login",{
                        userName:userName,
                        password
                } )
                .then((res)=>{
                        console.log(res.data)
                        localStorage.setItem("type",  res.data.type)
                        localStorage.setItem("token",  res.data.token)
                        navigate("/home")
                })
                .catch(err=>{
                        console.log(err)
                })
        }
        return (
                <div  className="card-admin">
                       <h1>LOGIN ADMIN</h1> 
                        <input 
                                onChange={(e)=>setUsername(e.target.value)} 
                                value={userName}  placeholder="User Name" 
                                className="input-admin" 
                                type="text"
                        ></input>
                        <input 
                                onChange={(e)=>setPassword(e.target.value)} 
                                value={password} placeholder="Password"  
                                className="input-admin" 
                                type="password"></input>
                        <button 
                                onClick={handleClick} 
                                className="submit-btn">
                                Login
                        </button>
                  </div>
        )
}

export default LoginAdmin