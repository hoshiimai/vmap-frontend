import React from 'react'
import "./Home.css";
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'

export default function Home() {
  return (
    <>
      <Topbar />
      <dev className="homeContainer">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </dev>
    </>
  )
}
