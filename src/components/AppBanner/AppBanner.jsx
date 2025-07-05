import React from 'react';
import bannerImage from "../../assets/banner.png";
import PlayStore from "../../assets/play.png.png";
import AppStore from "../../assets/App.png.png";

const bannerStyle = {
  backgroundImage: `url(${bannerImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: "100%",
  height: "100%",
};

const AppBanner = () => {
  return (
    <div className=" max-h-[200100px] px-4 py-12 flex justify-center items-center">
      <div
        style={bannerStyle}
        className="w-full max-w-5xl sm:min-h-[400px] flex items-center justify-end rounded-xl p-6"
      >
        {/* Logo Play & App Store dibungkus flex */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex space-x-4 mt-20 mr-20">
          <img
            src={PlayStore}
            alt="Play Store"
            className="w-[120px] md:w-[160px] hover:scale-105 duration-300"
          />
          <img
            src={AppStore}
            alt="App Store"
            className="w-[120px] md:w-[160px] hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
