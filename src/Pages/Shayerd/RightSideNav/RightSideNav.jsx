import { Link } from "react-router-dom"
import icon1 from "../../../assets/Facebook.jpg"
import icon2 from "../../../assets/Twitter.jpg"
import icon3 from "../../../assets/Twitter.jpg"
import icon4 from "../../../assets/qZone1.png"
import icon5 from "../../../assets/qZone2.png"
import icon6 from "../../../assets/qZone3.png"
import { FaGoogle, FaGithub } from "react-icons/fa6"



const RightSideNav = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-semibold my-6">Login With</h2>
        <Link >
          <div className=" border-2 text-center rounded-md mt-2 p-2 flex items-center gap-2  border-blue-400 ">
            <div>
              <span className="text-2xl font-extrabold text-blue-400"><FaGoogle></FaGoogle></span>
            </div>
            <h2 className="text-xl font-extrabold text-blue-400">Login With Google</h2>
          </div>

        </Link>
        <Link >
          <div className=" border-2 text-center rounded-md mt-2 p-2 flex items-center gap-2  border-black">
            <div>
              <span className="text-2xl font-extrabold "><FaGithub></FaGithub></span>
            </div>
            <h2 className="text-xl font-extrabold ">Login With Github</h2>
          </div>
        </Link>

      </div>
      <div className="">

        <h2 className="text-3xl font-extrabold mt-10 mb-4">Find Us On</h2>
        <div className="border p-4">
          <Link className="flex gap-2"><img src={icon1} alt="" /> Facebook</Link>
        </div>
        <div className="border-r border-l p-4">
          <Link className="flex gap-2"><img src={icon2} alt="" />Twitter</Link>
        </div>
        <div className="border p-4">
          <Link className="flex gap-2"> <img src={icon3} alt="" />Instagram</Link>
        </div>
      </div>


      <div className=" bg-[#F3F3F3]">
        <h2 className="text-3xl font-extrabold mt-12 pt-2 pl-2 mb-4">Q-Zone</h2>
        <div className="pt-5 pb-2 px-2">
          <img className="w-full" src={icon4} alt="" />
        </div>
        <div className="p-2">
          <img className="w-full" src={icon5} alt="" />
        </div>
        <div className="p-2">
          <img className="w-full" src={icon6} alt="" />
        </div>
      </div>


      <div className="text-center mt-5 py-10" style={{
        backgroundImage: `url("https://i.ibb.co/N1RPdM6/bg.png")`
      }}  >
        <h2 className="text-[#FFF] font-bold text-3xl px-10  my-5 text-center">
          Create an Amazing Newspape
        </h2>
        <p className="text-[#FFF] my-5 px-10 ">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>

       <Link> <button className="bg-[#D72050] px-[18px] py-3 text-[#FFF]">Learn More</button></Link>
      </div>
    </div>
  )
}

export default RightSideNav