import Navbar from "../Components/Nav";
import "../Styles/Home.css";
import NASA from "../assets/Images/NASA.png";
import ASI from "../assets/Images/ASI.png";
import EESA from "../assets/Images/eesa.png";
import ITA from "../assets/Images/ITA.png";
import ITSM from "../assets/Images/ITSM.png";
import PAP from "../assets/Images/PAP.png";
import CDP from "../assets/Images/CDP.png";

import Technology from "../assets/Images/Technology.png";

import Logo from "../assets/Images/Logo.png";

import Product1 from "../assets/Products/Product1.png";
import Product2 from "../assets/Products/Product2.png";
import Product3 from "../assets/Products/Product3.png";

import Product from "../Components/Products";

export default function Home() {
  return (
    <div className="bg-black">
      {/*this is the NavBar imported from Nav.jsx from Components*/}
      <Navbar />
      {/*this is the Landing Portion of the website*/}
      <div className="Home-Landing-Container w-screen h-[104vh]  bg-blue-400">
        <div className="Home-Landing-Text mx-auto w-[50%]  h-[50%] text-center py-[25%]">
          <h1 className="Home-Landing-Title text-[3vw] font-thin text-white">
            {" "}
            DECODING HUMAN GENIUS
          </h1>
          <h2 className="Home-Landing-Text text-[1.1vw] font-thin text-white">
            THE FUTURE IS GAME
          </h2>
          <div className="flex w-fit mx-auto mt-[1vw] text-white ">
            <a
              href="/about"
              className="font-thin Home-Discover-Btn  py-[0.4vw] mr-2 px-[2vw] rounded-3xl"
            >
              Discover Dyne
            </a>
            <a
              href="/contact "
              className="font-thin bg-transparent border border-white py-[0.4vw] ml-2 px-[1vw] rounded-3xl"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
      {/*}this is the Sponsor bar section*/}
      <div className="Sponsor-Bar relative w-screen !mt-0 h-[20vh]">
        <div className="Gradient-Overlay"></div>
        <div className="!mt-0 flex justify-between px-[2.5vw]">
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ASI} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={NASA} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={CDP} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={PAP} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ITSM} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ITA} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={EESA} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={ASI} />
          </div>
          <div className="w-1/12 mt-[4vh] flex items-center">
            <img className="mt-0" src={NASA} />
          </div>
        </div>
      </div>
      {/*Content section*/}
      <div className="w-screen bg-black Home-Content">
        <div className="h-[75vh] flex items-center">
          <div className="w-4/5 mx-auto flex items-center text-center text-white">
            <div className="mx-auto pr-20 !ml-[2vw] relative text-left">
              <h3 className="text-blue-300 mb-[7vh]">MISSION</h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[7vh] tracking-[0.05vw]">
                GAMIFY THE FUTURE
              </h1>
            </div>
            <div className="mx-auto pl-20 w-1/2 !mr-[2vw] relative">
              <h2 className="text-[0.9vw] tracking-[0.15vw] mt-[6vh] font-normal text-left Content-Font mb-[5vh]">
                We are working with various technologies to provide top notch
                experience in gaming industry. We design games that give the
                best learning experience ever. Crafted with utmost care to have
                the maximum fun and rigor.
              </h2>
              <a className="Content-Font absolute left-20 font-normal border border-gray-300 rounded-[100vw] p-[1.5vh] px-[3vh] ">
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="h-[75vh] flex items-center mt-[5vw] ">
          <div className="w-4/5 h-[75vh] mx-auto  items-center text-center px-[1vw] relative py-[13vh]   text-white">
            <div className="w-11/12 h-[30vw] Technology-Container text-left absolute rounded-3xl right-0 top-0 flex">
              <div className="w-1/2 mr-[4.5vw]"> </div>
              <div className="w-[30.5vw]">
                <h3 className="text-blue-300 mb-[4vh] tracking-[0.15vw] mt-[5vw]">
                  TECHNOLOGY
                </h3>
                <h1 className="text-[2.4vw] Mission-Gradient !font-normal tracking-[0.05vw]">
                  LEARN INSIDE A GAME
                </h1>
                <h2 className="text-[0.9vw] mt-[8vh] !font-normal text-left tracking-[0.1vw] Content-Font mb-[7vh]">
                  We design games that give the best learning experience ever.
                  Crafted with utmost care to have the maximum fun and rigor.
                </h2>
                <a className="Content-Font  font-normal border border-gray-300 rounded-[100vw] p-[1.5vh] px-[3vh] ">
                  Learn More
                </a>
              </div>
            </div>
            <img
              src={Technology}
              className="absolute left-0 top-[2vw] w-[46vw]"
            />
          </div>
        </div>
        <div className="h-[50vh] flex items-center mt-[12.5vh]">
          <div className="w-4/5 mx-auto flex items-center text-center text-white">
            <div className="mx-auto pr-20 !ml-[2vw] relative text-left">
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh]">NEWS</h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[4vh] tracking-[0.05vw]">
                We a are part of
              </h1>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src={Logo} className=" w-[2.5vw]  mt-0" alt="Dyne Logo" />
                <h1 className="text-2xl mt-1 text-white !font-light">
                  DYNERESEARCH
                </h1>
              </div>
            </div>
            <div className="mx-auto pl-20 w-1/2 !mr-[2vw] relative">
              <h2 className="text-[0.9vw] mt-[6vh] font-normal text-left Content-Font tracking-[0.1vw] w-11/12 mb-[5vh]">
                We are supported and funded by xyz company with this amnt of
                raise and this amount of this seeds. With our current technology
                we are looking for raising money for investors and growing up
                our industry. Lorem ipsum praesent ac massa at ligula reet est
                iaculis. Vivamus est mist aliquet elit ac nisl.
              </h2>
            </div>
          </div>
        </div>
        <div className="h-[75vh] flex items-center">
          <div className="w-4/5 mx-auto  items-center text-center text-white">
            <div>
              <h3 className="text-blue-300 tracking-[0.15vw] mb-[1vh]">
                PRODUCTS
              </h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[4vh] tracking-[0.05vw]">
                Our Line of innovating solutions
              </h1>
            </div>
            <div className="flex justify-between mt-[10vh]">
              <Product
                heading={"GAME 1 ®"}
                image={Product1}
                description={
                  "The intelligent pseudo-satellite platform for different missions."
                }
                styleText={""}
                styleContainer={
                  "w-[25vw] mx-5 h-[25vw] !bg-cover !bg-left-top bg-blue-400 "
                }
              />
              <Product
                heading={"GAME 2 ®"}
                image={Product2}
                description={"The first stratospheric balloon constellation"}
                styleText={""}
                styleContainer={
                  "w-[25vw] mx-5 h-[25vw] !bg-cover !bg-left-top bg-blue-400 "
                }
              />
              <Product
                heading={"Product 2 ®"}
                image={Product3}
                description={
                  "DIY Kitbox for conducting environmental and atmospheric research."
                }
                styleText={""}
                styleContainer={
                  "w-[25vw] mx-5 h-[25vw] !bg-cover !bg-left-bottom bg-blue-400 "
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
