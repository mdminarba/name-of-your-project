import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <div className='text-center mt-64'> 
            <h2 className="text-6xl  font-extrabold ">404 Not Found</h2>
            <div className="form-control mt-6">
                <Link><button className="btn btn-primary">Home</button></Link>
                
            </div>

        </div>
    )
}

export default Error