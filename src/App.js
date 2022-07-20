import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import NasaPhoto from "./Components/NasaPhoto";


const dummy = {
  date: "2022-07-20",
  explanation: "Why does Jupiter have rings?  Jupiter's main ring was discovered in 1979 by NASA's passing Voyager 1 spacecraft, but its origin was then a mystery.  Data from NASA's Galileo spacecraft that orbited Jupiter from 1995 to 2003, however, confirmed the hypothesis that this ring was created by meteoroid impacts on small nearby moons.  As a small meteoroid strikes tiny Metis, for example, it will bore into the moon, vaporize, and explode dirt and dust off into a Jovian orbit. The featured image of Jupiter in infrared light by the James Webb Space Telescope shows not only Jupiter and its clouds, but this ring as well. Also visible is Jupiter's Great Red Spot (GRS) -- in comparatively light color on the right, Jupiter's large moon Europa -- in the center of diffraction spikes on the left, and Europa's shadow -- next to the GRS.  Several features in the image are not yet well understood, including the seemingly separated cloud layer on Jupiter's right limb.    Celestial Surprise: What picture did APOD feature on your birthday? (post 1995)",
  hdurl: "https://apod.nasa.gov/apod/image/2207/JupiterRing_WebbSchmidt_2429.jpg",
  title: "Jupiter and Ring in Infrared from Webb"

}   

function App() {
  const [data, setData] = useState(dummy)

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
         .then(res => setData(res.data))
         .catch(err => console.log(err))
  }, [])
  
  return (
    <div className="App">
     <NasaPhoto photo={data}/>
    </div>
  );
}

export default App;


// date: "2022-07-20"
// explanation: "Why does Jupiter have rings?  Jupiter's main ring was discovered in 1979 by NASA's passing Voyager 1 spacecraft, but its origin was then a mystery.  Data from NASA's Galileo spacecraft that orbited Jupiter from 1995 to 2003, however, confirmed the hypothesis that this ring was created by meteoroid impacts on small nearby moons.  As a small meteoroid strikes tiny Metis, for example, it will bore into the moon, vaporize, and explode dirt and dust off into a Jovian orbit. The featured image of Jupiter in infrared light by the James Webb Space Telescope shows not only Jupiter and its clouds, but this ring as well. Also visible is Jupiter's Great Red Spot (GRS) -- in comparatively light color on the right, Jupiter's large moon Europa -- in the center of diffraction spikes on the left, and Europa's shadow -- next to the GRS.  Several features in the image are not yet well understood, including the seemingly separated cloud layer on Jupiter's right limb.    Celestial Surprise: What picture did APOD feature on your birthday? (post 1995)"
// hdurl: "https://apod.nasa.gov/apod/image/2207/JupiterRing_WebbSchmidt_2429.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Jupiter and Ring in Infrared from Webb"
// url: "https://apod.nasa.gov/apod/image/2207/Jupite