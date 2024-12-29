import "./Hero.scss";
import { useState } from "react";

const api = {
  key: "67fc54d54aeffd93c65624f2c90222dc",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Hero({ playRainSound, playSummerSound, playHazeSound }) {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === 200) {
          setWeather(result);
          console.log("Weather data:", result); 
          setError(null);
  
          const weatherConditionMain = result.weather[0].main.toLowerCase();
          const weatherConditionDesc = result.weather[0].description.toLowerCase();
  
          console.log("Main Condition:", weatherConditionMain); // Debugging condition main.
          console.log("Description:", weatherConditionDesc); // Debugging condition description.
  
          if (weatherConditionMain === "rain" || weatherConditionDesc.includes("rain")) {
            playRainSound();
          } else if (weatherConditionMain === "clear" || weatherConditionDesc.includes("clear")) {
            playSummerSound();
          } else if (
            weatherConditionMain === "clouds" &&
            (weatherConditionDesc.includes("broken") || weatherConditionDesc.includes("overcast"))
          ) {
            playSummerSound();
          } else if (
            weatherConditionMain === "haze" ||
            weatherConditionMain === "mist" ||
            weatherConditionDesc.includes("haze") ||
            weatherConditionDesc.includes("mist") ||
            weatherConditionDesc.includes("fog") ||
            weatherConditionDesc.includes("smoke")
          ) {
            playHazeSound();
          } else {
            console.log("Condition not handled:", weatherConditionMain);
          }
        } else {
          setError(result.message);
          setWeather({});
        }
      })
      .catch((err) => {
        console.error("An error occurred:", err);
        setError("An error occurred while fetching the data.");
        setWeather({});
      });
  };
  

  return (
    <div className="hero">
      <p className="under-construction">
        This website is a work in progress, but while I build something amazing, enjoy exploring the weather updates paired with soothing ambient sounds!
      </p>

      <div className="hero__weather">
        {/* Search box */}
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      {error && <p className="error">{error}</p>}

      {weather.name && (
        <div className="weather-info">
          <p className="city-name">{weather.name}</p>

          <p className="temperature">
            Temperature: {weather.main && weather.main.temp ? `${weather.main.temp}°C` : "Temperature data not available"}
          </p>

          {weather.main && (
            <>
              <p className="humidity">Humidity: {weather.main.humidity}%</p>
            </>
          )}

          {weather.weather && weather.weather[0] && (
            <p className="description">({weather.weather[0].description})</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Hero;


// import "./Hero.scss";
// import { useState } from "react";

// const api = {
//   key: "67fc54d54aeffd93c65624f2c90222dc",
//   base: "https://api.openweathermap.org/data/2.5/",
// };

// function Hero({ playRainSound, playSummerSound, playHazeSound }) {
//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState({});
//   const [error, setError] = useState(null);

//   const searchPressed = () => {
//     fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
//       .then((res) => res.json())
//       .then((result) => {
//         if (result.cod === 200) {
//           setWeather(result);
//           console.log(result);
//           setError(null);

//           const weatherConditionMain = result.weather[0].main.toLowerCase();
//           const weatherConditionDesc = result.weather[0].description.toLowerCase();

//           if (weatherConditionMain === "rain" || weatherConditionDesc.includes("rain")) {
//             playRainSound(); 
//           } else if (weatherConditionMain === "clear" || weatherConditionDesc.includes("clear" || "few")) {
//             playSummerSound();
//           } else if (weatherConditionMain === "clouds" || "few" && weatherConditionDesc.includes("broken" || "clouds" || "overcast" || "few")) {
//             playSummerSound(); 
//           } else if (weatherConditionMain === "haze" || "mist" && weatherConditionDesc.includes("haze" || "mist")) {
//             playHazeSound();
//           }
//         } else {
//           setError(result.message);
//           setWeather({});
//         }
//       })
//       .catch((err) => {
//         setError("An error occurred while fetching the data.");
//         setWeather({});
//       });
//   };

//   return (
//     <div className="hero">
//       <p className="under-construction">
//       This website is a work in progress, but while I build something amazing, enjoy exploring the weather updates paired with soothing ambient sounds!
//             </p>

//       <div className="hero__weather">
//         {/* Search box */}
//         <input
//           type="text"
//           placeholder="Enter city/town..."
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <button onClick={searchPressed}>Search</button>
//       </div>

//       {error && <p className="error">{error}</p>}

//       {weather.name && (
//         <div className="weather-info">
//           <p className="city-name">{weather.name}</p>

//           <p className="temperature">
//             Temperature: {weather.main && weather.main.temp ? `${weather.main.temp}°C` : "Temperature data not available"}
//           </p>

//           {weather.main && (
//             <>
//               <p className="humidity">Humidity: {weather.main.humidity}%</p>
//             </>
//           )}

//           {weather.weather && weather.weather[0] && (
//             <p className="description">({weather.weather[0].description})</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Hero;

