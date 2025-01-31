import "./speakers.css";
import SpeakerComponent from "./SpeakerComponent";
import { keynote } from "./keynoteSpeakersData";
export default function SponsorsSection() {
    return (
        <>

        {/* <h1 className=" bg-primary10 py-3 text-center hed underline">Tentative Speakers</h1> */}
        <div className="h-screen  bg-primary10 ">

       
        
        <h1 className="  py-3 text-center hed block p-6">Keynote Speakers</h1>
        <section id="railway" className=" bg-primary10 px-3 py-6 spon">
            {Object.values(keynote).map((value) => {
                return (
                <SpeakerComponent speaker={value} />
                );
            })}  
        </section>
             
        </div>
              
        </>
    )
}