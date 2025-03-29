"use client";
import React, { useState } from "react"; 
import Image from "next/image";

import img from "../assets/bg.png";

export default function Home() {
  // States
  const [sender, setSender] = useState('');
  const [reciver, setReciver] = useState('');
  const [message, setMessage] = useState('');

 

  const [showCard, setShowCard] = useState(false);


  const handleGenerator = () => {
    // Handle the card generation logic here
    // You can use the input values to create a unique card
    // router.push(`/card/?sender=${sender}&reciver=${reciver}&message=${message}`);
    setShowCard(true);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black font-sans text-center">

      {
        !showCard && (
          <div>
            <h1 className="text-3xl font-bold text-white mb-6">EID Wishing Card Generator</h1>
            <p className="text-lg text-gray-400 mb-4">
              Create personalized EID Wishing cards for your loved ones!
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Fill in your name, message and reciver Name below to generate a unique card.
            </p>
            <div className="w-11/12 max-w-md bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full outline-none p-3 mb-4 border border-gray-700 rounded-md text-lg bg-gray-800 text-white placeholder-gray-500"
                onKeyUp={(e) => { setSender((e.target as HTMLInputElement).value) }}
              />
              <input
                type="text"
                placeholder="Enter Reciver Name"
                className="w-full outline-none p-3 mb-4 border border-gray-700 rounded-md text-lg bg-gray-800 text-white placeholder-gray-500"
                onKeyUp={(e) => { setReciver((e.target as HTMLInputElement).value) }}
              />
              <input
                type="text"
                placeholder="Enter Your Message"
                className="w-full outline-none p-3 mb-4 border border-gray-700 rounded-md text-lg bg-gray-800 text-white placeholder-gray-500"
                onKeyUp={(e) => { setMessage((e.target as HTMLInputElement).value) }}
              />
              <button
                className="cursor-pointer w-full outline-none p-3 bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white rounded-md text-lg font-semibold hover:from-green-600 hover:via-green-700 hover:to-green-800 transition duration-300"
                onClick={handleGenerator}
              >
                Generate Card
              </button>
            </div>

          </div>
        )
      }

      {showCard && (
        <div>
          <div
            className="h-3/4 w-4/4 flex items-center justify-center relative"
          >
            <Image src={img} alt={"Hello"} className="h-full w-full object-cover rounded-lg" />

            <div className="mt-5 z-10 absolute flex flex-col items-center justify-center h-full w-full text-stone-900">
              <h1 className="text-[30px] font-bold leading-snug text-center bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
                <b>Happy</b> <br />
                Eid Mubarak!<br />
                To <br /> <b>{reciver}</b>
              </h1>

              <div className="bottom-text mt-5">
                <p className="text-sm font-semibold text-center leading-5 my-5">عيد مبارك! أسأل الله أن يملأ حياتك بالسعادة والسلام</p>
                <p className="text-xl font-bold text-center leading-7"> {message ? message : 'Eid Mubarak! May Allah fill your life with happiness and peace'}</p>
                <p className="text-center mt-5 text-sm">~ {sender} ~</p>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-5">
            <button
              className="flex items-center justify-center gap-2 cursor-pointer outline-none p-3 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white rounded-md text-lg font-semibold hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition duration-300"
              onClick={() => {
                const shareData = {
                  title: "Eid Mubarak Card",
                  text: `Eid Mubarak! Here's a special card for you from ${sender}.`,
                  url: `card/?sender=${sender}&reciver=${reciver}&message=${message}`,
                };
                if (navigator.share) {
                  navigator.share(shareData).catch((error) => console.error("Error sharing:", error));
                } else {
                  alert("Sharing is not supported in this browser.");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L11 13"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 2L15 22L11 13L2 9L22 2Z"
                />
              </svg>
              Share Card
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
