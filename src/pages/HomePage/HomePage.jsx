import { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import soundRain from "../../assets/sounds/rain.mp3";
import soundSummer from "../../assets/sounds/summer.mp3";
import soundMist from "../../assets/sounds/brown-noise.mp3";

function HomePage() {
  // Using useState to store audio objects and the current weather state
  const [rainAudio, setRainAudio] = useState(null);
  const [summerAudio, setSummerAudio] = useState(null);
  const [hazeAudio, setHazeAudio] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    // Initialize audio objects once on component mount
    setRainAudio(new Audio(soundRain));
    setSummerAudio(new Audio(soundSummer));
    setHazeAudio(new Audio(soundMist));

    // Cleanup audio objects when the component unmounts
    return () => {
      if (rainAudio) {
        rainAudio.pause();
        rainAudio.currentTime = 0;
      }
      if (summerAudio) {
        summerAudio.pause();
        summerAudio.currentTime = 0;
      }
      if (hazeAudio) {
        hazeAudio.pause();
        hazeAudio.currentTime = 0;
      }
    };
  }, []); // Empty dependency array ensures this runs only once

  const playRainSound = () => {
    if (currentWeather === "rain") return;

    // Pause other sounds if playing
    if (summerAudio && !summerAudio.paused) {
      summerAudio.pause();
      summerAudio.currentTime = 0;
    }
    if (hazeAudio && !hazeAudio.paused) {
      hazeAudio.pause();
      hazeAudio.currentTime = 0;
    }

    rainAudio.play().then(() => {
      console.log("Rain sound is playing!");
      setCurrentWeather("rain"); // Update state
    }).catch((err) => {
      console.error("Error playing rain sound:", err);
    });
  };

  const playSummerSound = () => {
    if (currentWeather === "summer") return;

    // Pause other sounds if playing
    if (rainAudio && !rainAudio.paused) {
      rainAudio.pause();
      rainAudio.currentTime = 0;
    }
    if (hazeAudio && !hazeAudio.paused) {
      hazeAudio.pause();
      hazeAudio.currentTime = 0;
    }

    summerAudio.play().then(() => {
      console.log("Summer sound is playing!");
      setCurrentWeather("summer"); // Update state
    }).catch((err) => {
      console.error("Error playing summer sound:", err);
    });
  };

  const playHazeSound = () => {
    if (currentWeather === "haze") return;

    // Pause other sounds if playing
    if (rainAudio && !rainAudio.paused) {
      rainAudio.pause();
      rainAudio.currentTime = 0;
    }
    if (summerAudio && !summerAudio.paused) {
      summerAudio.pause();
      summerAudio.currentTime = 0;
    }

    hazeAudio.play().then(() => {
      console.log("Haze sound is playing!");
      setCurrentWeather("haze"); // Update state
    }).catch((err) => {
      console.error("Error playing haze sound:", err);
    });
  };

  return (
    <div>
      <Hero 
        playRainSound={playRainSound} 
        playSummerSound={playSummerSound} 
        playHazeSound={playHazeSound}
      />
      <Main />
    </div>
  );
}

export default HomePage;



// import Hero from "../../components/Hero/Hero";
// import Main from "../../components/Main/Main";
// import soundRain from "../../assets/sounds/rain.mp3";
// import soundSummer from "../../assets/sounds/summer.mp3";
// import soundMist from "../../assets/sounds/brown-noise.mp3";

// function HomePage() {
//   let rainAudio = null;
//   let summerAudio = null;
//   let hazeAudio = null;
//   let currentWeather = null; 

//   function playRainSound() {
//     if (currentWeather === "rain") {
//       return;
//     }

//     if (summerAudio) {
//       summerAudio.pause();
//       summerAudio.currentTime = 0;
//     }

//     if (!rainAudio) {
//       rainAudio = new Audio(soundRain);
//       rainAudio.loop = true; 
//     }
//     rainAudio.play()
//       .then(() => {
//         console.log("Rain sound is playing!");
//         currentWeather = "rain"; 
//       })
//       .catch((err) => {
//         console.error("Error playing sound:", err);
//       });
//   }

//   function playSummerSound() {
//     if (currentWeather === "summer") {
//       return;
//     }

//     if (rainAudio) {
//       rainAudio.pause();
//       rainAudio.currentTime = 0;
//     }

//     if (!summerAudio) {
//       summerAudio = new Audio(soundSummer);
//       summerAudio.loop = true; 
//     }
//     summerAudio.play()
//       .then(() => {
//         console.log("Summer sound is playing!");
//         currentWeather = "summer"; 
//       })
//       .catch((err) => {
//         console.error("Error playing sound:", err);
//       });
//   }

//   function playHazeSound() {
//     if (currentWeather === "haze") {
//       return;
//     }

//     if(rainAudio) {
//       rainAudio.pause();
//       rainAudio.currentTime = 0;
//     }

//    if (summerAudio) {
//       summerAudio.pause();
//       summerAudio.currentTime = 0;
//     }

//     if(!hazeAudio) {
//       hazeAudio = new Audio (soundMist);
//       hazeAudio.loop = true;
//     }
//     hazeAudio.play()
//     .then(() => {
//       console.log("Haze sound is playing!");
//       currentWeather = "haze"; 
//     })
//     .catch((err) => {
//       console.error("Error playing sound:", err);
//     });  }

//   return (
//     <div>
//       <Hero 
//         playRainSound={playRainSound} 
//         playSummerSound={playSummerSound} 
//         playHazeSound={playHazeSound}
//       />
//       <Main />
//     </div>
//   );
// }

// export default HomePage;


