import { Analytics, Face, Gif, Image } from '@mui/icons-material'
import axios from 'axios';
import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../../state/AuthContext';
import "./Share.css"

export default function Share() {
  const REACT_APP_PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  // const [user, setUser] = useState({});

  const {user} = useContext(AuthContext); 
  const desc = useRef();

  const [file, setFile] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      try {
        //画像APIを叩く
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
              <img src={
                user.profilePicture
                  ? REACT_APP_PUBLIC_FOLDER + user.profilePicture
                  : REACT_APP_PUBLIC_FOLDER + "/person/noAvatar.png"
                } 
                alt="" 
                className="shareProfileImg" 
              />
              <input type="text" className="shareInput" placeholder="いまどうしてる？" ref={desc}/>
            </div>
            <hr className="shareHr" />

            <form className="shareButtons" onSubmit={(e) => handleSubmit(e)}>
              <div className="shareOptions">
                <label className="shareOption" htmlFor="file">
                  <Image className="shareIcon" htmlColor="blue"/>
                  <span className="shareOptiontext">写真</span>
                  <input 
                    type="file" 
                    id="file" 
                    accept=".png .jpeg .jpg .gif" 
                    style={{ display: "none" }} 
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </label>
                <div className="shareOption">
                  <Gif className="shareIcon" htmlColor="hotpink"/>
                  <span className="shareOptiontext">GIF</span>
                </div>
                <div className="shareOption">
                  <Face className="shareIcon" htmlColor="green"/>
                  <span className="shareOptiontext">気持ち</span>
                </div>
                <div className="shareOption">
                  <Analytics className="shareIcon" htmlColor="red"/>
                  <span className="shareOptiontext">投票</span>
                </div>
              </div>
              <button className="shareButton" type="submit">投稿</button>
            </form>
        </div>
    </div>
  )
}
