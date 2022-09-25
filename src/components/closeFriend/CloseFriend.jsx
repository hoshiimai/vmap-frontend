import React from 'react'

export default function CloseFriend({ user }) {
  const REACT_APP_PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend">
        <img src={REACT_APP_PUBLIC_FOLDER + user.profilePicture} alt="" className="sidebarFriendImg"></img>
        <span className="sidebarFriendName">{user.username}</span>
    </li>
  )
}
