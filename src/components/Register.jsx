import { Link } from "react-router-dom"
import NavBar from "../Pages/Shayerd/NavBar/NavBar"
import { useContext, useState } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendEmailVerification, updateProfile } from "firebase/auth";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [success, setsuccess] = useState('')
    const [registerError, setregisterError] = useState('')
    const [showpassword, setshopassword] = useState(false)

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password, name, photo)
        setregisterError(' ')
        setsuccess(' ')
        if (password.legnth < 6) {
            setregisterError('password shuld vbe at least p characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setregisterError('Your password shold have at least one upper case characters')
            return
        }
        createUser(email, password)
            .then(result => {
                setsuccess('User Createt Successfully.')
                console.log(result.user)

                updateProfile(result.user,{
                    displayName:name,
                    photoURL: "https://example.com/jane-q-user/profile.jpg"
                })
                .then(()=>console.log('profile updated'))
                .catch
    
                sendEmailVerification(result.user)
                .then(() => {
                    alert('please check your email and verify your account ')
                })
            })
        
            .catch(error => {
                console.error(error)
                setregisterError(error.message)

            })
    }
    return (
        <div>
            <NavBar></NavBar>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" required className="input input-bordered" />

                                <span className='relative -top-8  left-72 w-6' onClick={() => setshopassword(!showpassword)}>{
                                    showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                <label className="label">
                                    <p className="font-medium">Already have an account<Link className="btn btn-sm btn-primary text-white " to="/login">Login</Link></p>

                                </label>
                                {
                                    registerError && <h2 className=" text-red-600">{registerError}</h2>
                                }
                                {
                                    success && <h2 className="text-emerald-800 font-bold">{success}</h2>
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register