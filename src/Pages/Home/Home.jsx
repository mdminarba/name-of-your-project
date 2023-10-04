import Header from "../Shayerd/Haeder/Header"
import NavBar from "../Shayerd/NavBar/NavBar"
import RightSideNav from "../Shayerd/RightSideNav/RightSideNav"
import LefttSiteNav from "../Shayerd/lefttSiteNav/lefttSiteNav"
import BrekingNews from "./BrekingNews"
import { useLoaderData } from "react-router-dom"
import Homes from "./Homes"
// import { useEffect, useState } from "react"


const Home = () => {
const news = useLoaderData()
console.log(news)
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
          {
            news.map(newss =><Homes key={newss.id}  news={newss}></Homes>)
          }

        </div>
        <div className="flex-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  )
}

export default Home