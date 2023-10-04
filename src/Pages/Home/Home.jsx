import Header from "../Shayerd/Haeder/Header"
import NavBar from "../Shayerd/NavBar/NavBar"
import RightSideNav from "../Shayerd/RightSideNav/RightSideNav"
import LefttSiteNav from "../Shayerd/lefttSiteNav/lefttSiteNav"
import BrekingNews from "./BrekingNews"
import moment from 'moment';
import photo from '../../../src/assets/Ellipse 1.svg';
import photo1 from '../../../src/assets/editorsInsight1.png';
import photo2 from '../../../src/assets/editorsInsight2.png';
import photo3 from '../../../src/assets/editorsInsight3.png';
// import Homes from "./Homes"
// import { useEffect, useState } from "react"


const Home = () => {
  // const [jobs, setjobs] = useState([])

  // useEffect(() => {
  //   fetch('jobs.json')
  //     .then(res => res.json())
  //     .then(data => setjobs(data))
  //   }, [])


  return (
    <div className="">
      <Header></Header>
      <BrekingNews></BrekingNews>
      <NavBar></NavBar>
      <div className="grid grid-cols-1 md:grid-cols-4 mt-10 gap-6  ">
        <div className="flex-1">
          <LefttSiteNav></LefttSiteNav>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-semibold my-6">Dragon News Home</h2>
          {/* {
            jobs.map(job =><Homes key={job.id}  job={job}></Homes>)
          } */}
          <div className="flex gap-5 items-center bg-[#F3F3F3] p-2 rounded-md">
            
            <div className="">
              <img src={photo} alt="" />
            </div>
            <div className="">
              <h2 className="text-xl font-semibold ">Awlad Hossain</h2>
              <h4 className=" mt-2 text-[#403F3F] font-medium">{moment().format("DD, M YYYY")}</h4>
            </div>
          </div>

          <div className="">
            <h2 className="text-[26px] font-extrabold my-6 text-[#403F3F]">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
          </div>
          <div className="mt-3">
           <div className="">
            <img src={photo1} alt="" />
           </div>
           <div className="">
            <p className="mt-5">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <span className="text-red-500">Read More</span>
            </p>
           </div>
          </div>

          {/* ------- */}

          <div className="flex gap-5 items-center mt-5 bg-[#F3F3F3] p-2 rounded-md">
            
            <div className="">
              <img src={photo} alt="" />
            </div>
            <div className="">
              <h2 className="text-xl font-semibold ">Awlad Hossain</h2>
              <h4 className=" mt-2 text-[#403F3F] font-medium">{moment().format("DD, M YYYY")}</h4>
            </div>
          </div>

          <div className="">
            <h2 className="text-[26px] font-extrabold my-6 text-[#403F3F]">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
          </div>
          <div className="mt-3">
           <div className="">
            <img src={photo2} alt="" />
           </div>
           <div className="">
            <p className="mt-5">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <span className="text-red-500">Read More</span>
            </p>
           </div>
          </div>

          {/* ---------- */}

          <div className="flex gap-5 items-center mt-5 bg-[#F3F3F3] p-2 rounded-md">
            
            <div className="">
              <img src={photo} alt="" />
            </div>
            <div className="">
              <h2 className="text-xl font-semibold ">Awlad Hossain</h2>
              <h4 className=" mt-2 text-[#403F3F] font-medium">{moment().format("DD, M YYYY")}</h4>
            </div>
          </div>

          <div className="">
            <h2 className="text-[26px] font-extrabold my-6 text-[#403F3F]">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
          </div>
          <div className="mt-3">
           <div className="">
            <img src={photo3} alt="" />
           </div>
           <div className="">
            <p className="mt-5">
            Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News) – U.S. President Joe Biden has announced nearly $3 billion in new U.S. military a... <span className="text-red-500">Read More</span>
            </p>
           </div>
          </div>

        </div>
        <div className="flex-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  )
}

export default Home