import { useState } from "react";
import pic1 from "../../../assets/1.png"
import pic2 from "../../../assets/2.png"
import pic3 from "../../../assets/3.png"
import moment from 'moment';
import { Link } from "react-router-dom";
import { useEffect } from "react";


const LefttSiteNav = () => {
  const [caterogys, setcaterogys] = useState([])

  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
      .then(data => setcaterogys(data))

  }, [])
  return (
    <div>
      <div className="">
        <h2 className=" text-3xl  font-semibold my-6"> All Caterogy</h2>
        <div className="">
          <h2 className="py-3 px-6 rounded-md bg-[#E7E7E7] text-lg font-semibold text-center">National New</h2>
        </div>
        <div className="">
        {
          caterogys.map(caterogys=> 
            <Link  
            className="block mt-5 text-[#9F9F9F] font-medium text-xl" 
            key={caterogys.id}
            to={`/caterogys/${caterogys.id}`}
            >{caterogys.name} 
          </Link>)
        }

        </div>
        <div className="my-6">
          <img className="w-full" src={pic1} alt="" />
        </div>
        <div className="">
          <h2 className="text-[#403F3F] text-xl mt-3 font-semibold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
        </div>
        <div className="mt-3">
          <img className="w-full" src={pic2} alt="" />
        </div>
        <div className="mt-3">
          <h2 className="text-[#403F3F] text-xl mt-3 font-semibold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
          <h4 className=" mt-2 text-[#403F3F] font-medium"><span className="font-medium text-black text-lg pr-5">Sports</span>{moment().format(" MMMM D YYYY")}</h4>

        </div>
        <div className="mt-3">
          <img className="w-full" src={pic3} alt="" />
        </div>
        <div className="mt-3">
          <h2 className="text-[#403F3F] text-xl mt-3 font-semibold ">Bayern Slams Authorities Over Flight Delay to Club World Cup</h2>
          <h4 className=" mt-2 text-[#403F3F] font-medium"><span className="font-medium text-black text-lg pr-5">Sports</span>{moment().format(" MMMM D YYYY")}</h4>
        </div>
      </div>
    </div>
  )
}

export default LefttSiteNav