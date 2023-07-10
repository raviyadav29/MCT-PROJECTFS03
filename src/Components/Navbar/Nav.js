import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div style={{backgroundColor:"black", color:"white",display:"flex"}}>
        <div>
            <h2>Github</h2>
        </div>
        <div>
            <Link to="/home">Home</Link>
            <Link to="/profiledetails">ProfileDetails</Link>
        </div>
    </div>
  )
}

export default Nav