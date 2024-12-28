import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import soundRain from "../../assets/sounds/rain.mp3";
import soundSummer from "../../assets/sounds/summer.mp3"; 

function HomePage() {
  let rainAudio = null; 
  let summerAudio = null; 

  // Stop and play rain sound
  function playRainSound() {
    if (rainAudio) {
      rainAudio.pause(); 
      rainAudio.currentTime = 0; 
    }
    rainAudio = new Audio(soundRain);
    rainAudio.play()
      .then(() => {
        console.log('Rain sound is playing!');
      })
      .catch((err) => {
        console.error('Error playing sound:', err);
      });
  }

  function playSummerSound() {
    if (summerAudio) {
      summerAudio.pause(); 
      summerAudio.currentTime = 0; 
    }
    summerAudio = new Audio(soundSummer);
    summerAudio.play()
      .then(() => {
        console.log('Summer sound is playing!');
      })
      .catch((err) => {
        console.error('Error playing sound:', err);
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

