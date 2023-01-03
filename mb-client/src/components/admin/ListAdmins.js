import "../.././App.css"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import axios from "axios"
import React from "react"

function ListAdmins () {
        const navigate = useNavigate()

        const [admins, setAdmins] = useState([])

        useEffect(() => {
                if (localStorage.getItem("type") !== "ADMIN" ) {
                        navigate("/admin/dashboard")
                }
        }, [])

        useEffect(()=> {
        axios.get('http://localhost:5000/admin/admins')
        .then(res => {
                console.log(res.data)
                setAdmins(res.data.data)
        })
        .catch(err => {
                console.log(err)
        })
        }, [])

     return(
          <>
              <div className="relative mx-16 mt-20">
<Link to="/admin/add" class="mx-auto bg-red-500 ml-10 pt-2 text-gray-50 hover:bg-red-700 p-3 px-3 sm:px-5 rounded"> ADD ADMIN</Link>
              </div>
<div class="relative overflow-x-auto mx-16 mt-10">
    <table class="w-full text-sm text-left my-6 text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-6">
                    Username
                </th>
                <th scope="col" class="px-6 py-6">
                    Password
                </th>
                <th scope="col" class="px-6 py-6">
                    Type
                </th>
                <th scope="col" class="px-6 py-6">
                    Status
                </th>
                <th scope="col" class="px-6 py-6">
                    Date
                </th>
            </tr>
        </thead>
        <tbody>

            {admins.length > 0 && 
                admins.map((adminItem, adminIndex) =>{
                        return (
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <>
                                <th class="px-6 py-3">{ adminItem.userName }  </th>
                                <td>  { adminItem.password } </td>
                                <td>  { adminItem.type }  </td>
                                <td>  { adminItem.status }  </td>
                                <td>  { adminItem.date }</td>
                                </>
                </tr>
                        
                        )
                })
                }

     
        </tbody>
    </table>
</div>
  
          </>
     )
}

export default ListAdmins