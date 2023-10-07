/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../../Shayerd/Haeder/Header'
import RightSideNav from '../../Shayerd/RightSideNav/RightSideNav'
import NavBar from '../../Shayerd/NavBar/NavBar'
import { useLoaderData, useParams } from 'react-router-dom'

const Newss = () => {
  const news = useLoaderData();
  const {id} = useParams();
  const parse = parseInt(id);
  const item = news.find(item => item.id === parse);

  console.log(item)
  return (
    <div>
      <Header></Header>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-5xl">News Details</h2>
        </div>
        <RightSideNav></RightSideNav>
      </div>
    </div>
  )
}

export default Newss