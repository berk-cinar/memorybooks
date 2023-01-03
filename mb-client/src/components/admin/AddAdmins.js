import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "../../App.css"

function AddAdmins() {
        const navigate = useNavigate()

        const [userName, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const [status, setStatus] = useState("")
        const [type, setType] = useState("")

        const handleClick = () => {
                console.log(userName,password,status,type)
                axios.post("http://localhost:5000/admin/add",{
                        userName:userName,
                        password,
                        type,
                        status,
                        date: new Date()
                } )
                .then((res)=>{
                        console.log(res.data)
                        navigate("/admin/list")
                })
                .catch(err=>{
                        console.log(err)
                })
        }

        return (
                <div  className="card-admin">
                       <h1>ADD ADMIN</h1> 
                        <input onChange={(e)=>setUsername(e.target.value)} value={userName}  placeholder="User Name" className="input-admin" type="text"></input>
                        <input onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Password"  className="input-admin" type="password"></input>
                        <select onChange={(e)=>setStatus(e.target.value)} value={status} className="select-admin">
                                <option>BLOCK </option>
                                <option>ACTIVE</option>
                                <option>DELETE </option>
                        </select >
                        <select value={type}
                         onChange={(e)=>setType(e.target.value)} 
                         className="select-admin">
                                <option>SUBADMIN</option>
                                <option>ADMIN</option>
                        </select>
                        <button onClick={handleClick} className="submit-btn">
                                submit
                        </button>
                  </div>
        )
}

export default AddAdmins