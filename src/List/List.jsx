import React from 'react'
import axios from 'axios'
export default function List() {
    return (
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            res.map((item, index) => {
                return (
                        <div key={index}>
                        <h1>{item.name}</h1>
                        <h2>{item.email}</h2>
                        </div>
                )
            })
        })
        .catch(err => console.log(err))
    )
}
