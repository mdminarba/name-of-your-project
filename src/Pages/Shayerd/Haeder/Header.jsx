import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'> 
           <div className="">
           <img className='mx-auto my-5' src={logo} alt="" />
            <p className="">Journalism Without Fear or Favour</p>
            <h4 className="text-xl text-xl mt-2 text-[#403F3F] font-medium">{moment().format("dddd, MMMM D YYYY")}</h4>
           </div>
        </div>
    )
}

export default Header