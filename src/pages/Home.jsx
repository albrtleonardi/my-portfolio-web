import React from "react";
import MyImg from "../assets/my-photo.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="h-screen lg:overflow-hidden">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col justify-center">
          <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col items-center lg:items-start">
            <h1 className="font-poppins text-5xl font-medium text-center lg:text-left">
              Software engineering <br /> & UI/UX Designer
            </h1>
            <p className="text-[26px] lg:text-[36px] font-chillax mb-4 lg:mb-12 text-center lg:text-left">
              Tangerang, Indonesia
            </p>
            <Link
              to={"/contact"}
              className="mb-[30px] w-40 text-white h-16 bg-black flex items-center justify-center"
            >
              HIRE ME
            </Link>
          </div>
          <div className="flex justify-end">
            <img src={MyImg} alt="my-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
