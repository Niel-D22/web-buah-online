import React from 'react'
import bannerImage from "../../assets/banner.png"
import PlayStore from "../../assets/play.png.png"
import AppStore from "../../assets/App.png.png"


const bannerStyle ={
    backgroundImage: `url(${bannerImage})`,
    backgroundPosition: 'center',
    bacgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width:"100%",
    height:"100%",
};


const AppBanner = () => {
    console.log(bannerStyle)
  return (
    <div>AppBanner</div>
  )
}

export default AppBanner