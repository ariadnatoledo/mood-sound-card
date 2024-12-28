import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import soundRain from "../../assets/sounds/rain.mp3";
import soundSummer from "../../assets/sounds/summer.mp3";

function HomePage() {
  let rainAudio = null;
  let summerAudio = null;
  let currentWeather = null; 

  function playRainSound() {
    if (currentWeather === "rain") {
      return;
    }

    if (summerAudio) {
      summerAudio.pause();
      summerAudio.currentTime = 0;
    }

    if (!rainAudio) {
      rainAudio = new Audio(soundRain);
      rainAudio.loop = true; 
    }
    rainAudio.play()
      .then(() => {
        console.log("Rain sound is playing!");
        currentWeather = "rain"; 
      })
      .catch((err) => {
        console.error("Error playing sound:", err);
      });
  }

  function playSummerSound() {
    if (currentWeather === "summer") {
      return;
    }

    if (rainAudio) {
      rainAudio.pause();
      rainAudio.currentTime = 0;
    }

    if (!summerAudio) {
      summerAudio = new Audio(soundSummer);
      summerAudio.loop = true; 
    }
    summerAudio.play()
      .then(() => {
        console.log("Summer sound is playing!");
        currentWeather = "summer"; 
      })
      .catch((err) => {
        console.error("Error playing sound:", err);
      });
  }

  return (
    <div>
      <Hero 
        playRainSound={playRainSound} 
        playSummerSound={playSummerSound} 
      />
      <Main />
    </div>
  );
}

export default HomePage;


