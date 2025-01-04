import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { GameStateProvider } from './context/GameStateContext'; // Import provider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameStateProvider> {/* Wrap App component with provider */}
      <App />
    </GameStateProvider>
  </StrictMode>
);