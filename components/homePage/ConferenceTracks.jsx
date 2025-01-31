// CombinedTracks.js
'use client';
import React, { useState } from "react";
import Link from "next/link";
import Track from "@/components/homePage/Track_Pages/tracks/Track";
import data_analytics from "@/assets/icons/data_mining.png";
import cryptography from "@/assets/icons/cryptography.png";
import iot from "@/assets/icons/IoT.png";
import ai from "@/assets/icons/ai.png";
import healthcare from "@/assets/icons/healthcare.png";
import './ConferenceTracks.css';
import { tracks } from '@/components/homePage/Track_Pages/tracks/data';

export default function CombinedTracks() {
  const themes = [
    {
      name: "DATA ANALYTICS AND MINING",
      imageUrl: data_analytics,
      link: "#dataanalytics", // Use section IDs as links
    },
    {
      name: "CRYPTOGRAPHY, CYBER SECURITY AND NETWORK SECURITY",
      imageUrl: cryptography,
      link: "#cryptography",
    },
    {
      name: "CLOUD COMPUTING AND IOT",
      imageUrl: iot,
      link: "#cloudcomputing",
    },
    {
      name: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      imageUrl: ai,
      link: "#aiml",
    },
    {
      name: "DIGITAL INNOVATION IN HEALTHCARE AND ITS APPLICATION",
      imageUrl: healthcare,
      link: "#healthcare",
    },
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };
  

  // const cardColors = ["#FD6824", "#57C12C", "#26BDE3", "#DD1267", "#FCC309"];

  return (
    <div>
      <section id="themes" className="py-6">
        <div className="container flex flex-col mx-auto py-4 items-center justify-center">
              <h4 className="max-w-md text-4xl font-bold text-center mx-auto md:text-4xl md:text-left mb-6">
                  TRACKS
              </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 justify-center">
            {themes.map(function (theme, index) {
              return (
                <Link key={index} href={theme.link} passHref>
                  <div
                    className={`card grid-container ${hoveredCard === index ? "hovered" : ""}`}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                  >
                    <div className="card-inner bg-gradient-to-b from-[#c8bfe8] to-[#dce6fa] p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center h-full">
                      <div className="front flex flex-col items-center justify-center w-full h-full">
                        <div className="front-content flex flex-col items-center justify-center w-full m-6">
                          <img
                            src={theme.imageUrl.src}
                            alt={theme.name}
                            className="w-36 sm:w-40 ring-4 sm:ring-6 ring-blue-900 ring-offset-white bg-white ring-offset-2 sm:ring-offset-4 rounded-full aspect-square object-cover"
                          />
                          <p className="font-bold py-3 text-xl sm:text-xl text-blue-900 m-8">{theme.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Render Track components */}
      {tracks.map(function (elem, idx) {
        return <Track key={idx} {...elem} imgOri={idx % 2} />;
      })}
    </div>
  );
}
