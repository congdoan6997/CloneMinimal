import { useState } from 'react';
import './App.css';
import Router from 'src/routes/sections';
import ThemeProvider from './theme';
function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}

export default App;
