import Hero from "../../components/Hero/Hero";
import Main from "../../components/Main/Main";
import soundRain from "../../assets/sounds/rain.mp3";

function HomePage() {
  function playRainSound() {
    const audio = new Audio(soundRain);
    audio.play()
      .then(() => {
        console.log('Rain sound is playing!');
      })
      .catch((err) => {
        console.error('Error playing sound:', err);
      });
  }

  return (
    <div>
      <Hero playRainSound={playRainSound} />
      <Main />
    </div>
  );
}

export default HomePage;

