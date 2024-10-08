import { Notifications, Chat, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import "./Topbar.css";

export default function Topbar() {
  const {user} = useContext(AuthContext);
  const REACT_APP_PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className='topbarContainer'>
      <div className='topbarLeft'>
      <Link to="/" style={ { textDecoration: "none", color: "black" }}>
        <span className="logo">vmap</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input type="text" className="searchInput" placeholder="検索"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className='topbarItemIcons'>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">2</span>
          </div>
          <Link to={`/profile/${user.username}`}>
            <img src={
              user.profilePicture 
                ? REACT_APP_PUBLIC_FOLDER + user.profilePicture 
                : REACT_APP_PUBLIC_FOLDER + "/person/noAvatar.png"
              } 
              alt="" 
              className="topbarImg" 
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
