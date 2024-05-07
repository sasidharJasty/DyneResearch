import Navbar from "../Components/Nav";
import "../Styles/Home.css";
import NASA from "../assets/Images/NASA.png";
import ASI from "../assets/Images/ASI.png";
import EESA from "../assets/Images/eesa.png";
import ITA from "../assets/Images/ITA.png";
import ITSM from "../assets/Images/ITSM.png";
import PAP from "../assets/Images/PAP.png";
import CDP from "../assets/Images/CDP.png";

export default function Home() {
  return (
    <div className="bg-black">
      // this is the NavBar imported from Nav.jsx from Components
      <Navbar />
      // this is the Landing Portion of the website
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
      // this is the Sponsor bar section
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
      //Content section
      <div className="w-screen bg-black Home-Content">
        <div className="h-[75vh] flex items-center">
          <div className="w-4/5 mx-auto flex items-center text-center text-white">
            <div className="mx-auto pr-20 !ml-[2vw] relative text-left">
              <h3 className="text-blue-400 mb-[7vh]">MISSION</h3>
              <h1 className="text-[2.6vw] Mission-Gradient !font-normal mb-[7vh] tracking-[0.05vw]">
                GAMIFY THE FUTURE
              </h1>
            </div>
            <div className="mx-auto pl-20 w-1/2 !mr-[2vw] relative">
              <h2 className="text-[0.8vw] mt-[6vh] font-normal text-left text-gray-300 mb-[5vh]">
                We are working with various technologies to provide top notch
                experience in gaming industry. We design games that give the
                best learning experience ever. Crafted with utmost care to have
                the maximum fun and rigor.
              </h2>
              <a className="text-gray-300 absolute left-20 font-normal border border-gray-300 rounded-[100vw] p-[1.5vh] px-[3vh] ">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
