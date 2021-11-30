import React, { useEffect, useState } from 'react';
import './GridData.css';
import axios from 'axios';

function GridData() {
    const url="https://gorest.co.in/public/v1/todos"

   const[fetchData,setFetchData] =useState([])
    useEffect(() => {
       axios.get(url)
       .then((data)=>{
        setFetchData(data.data.data)
       })
       .catch((error) => {console.log(error)})
    }, [])
    const turncate=(str,n)=>{
       return str?.length > n ? str.substr(0,n-1)+'...':str;
    }
    // console.log(fetchData.length,"fetchData")
    return (
        <div className="griddata">
            <div className="row">
           {
             fetchData.map((fetchData) => (
                 (fetchData.id<55) ?
                <div className="col" key={fetchData.id}>
                    <p>{fetchData.id}</p>
                    <p>{fetchData.status}</p>
                    <p>{turncate(fetchData.title,25)}</p>    
                </div> 
                : <p></p>
             ))
        }
        </div>

        </div>
    )
}

export default GridData
