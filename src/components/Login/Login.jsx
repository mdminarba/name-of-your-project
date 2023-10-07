import { Link, useLocation, useNavigate } from "react-router-dom"
import NavBar from "../../Pages/Shayerd/NavBar/NavBar"
import { useContext, } from "react"
import { AuthContext } from "../../Providers/AuthProvider"
import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { sendPasswordResetEmail } from "firebase/auth"
import app from "../../Firebase/Firebase.config"
import { useRef } from "react"
import auth from "../../firebe.config.js/firebe.config"



const Login = () => {
    const { signIn } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate()
    const [success, setsuccess] = useState('')
    const [registerError, setregisterError] = useState('');
    const [showpassword, setshowpassword] = useState(false);
    const emailRef = useRef(null)
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        setregisterError('');
        setsuccess("");
        if (password.legnth < 6) {
            setregisterError('password shuld vbe at least 6 characters or longer')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setregisterError('Your password shold have at least one upper case characters')
            return
        }
        signIn(email, password)


            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                setsuccess('User Createt Successfully.')
            })
            .catch(error => {
                console.error(error)
                setregisterError(error.message)
            })
            
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            console.log('please provaide an  email', emailRef.current.value);
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log('please write a valid email')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check you email')
            })
            .catch(error => {
                console.log(error);

            })
    }
    return (
        <div>
            <NavBar></NavBar>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name="password" placeholder="password" required className="input input-bordered" />

                                <span className='relative -top-8  left-72 w-6' onClick={() => setshowpassword(!showpassword)}>{
                                    showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }</span>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    ref={emailRef}
                                    placeholder="email"
                                    required className="input input-bordered" />
                            </div>
                            <label className="label">
                                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {
                                registerError && <h2 className=" text-red-600">{registerError}</h2>
                            }
                            {
                                success && <h2 className="text-emerald-800 font-bold">{success}</h2>
                            }
                            <label className="label">
                                <p className="font-medium">Do not have an account <Link className="btn btn-sm btn-primary  text-white " to="/register">Register</Link></p>

                            </label>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login