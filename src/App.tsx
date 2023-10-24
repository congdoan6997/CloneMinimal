import { useState } from 'react';
import Router from 'src/routes/sections';
import ThemeProvider from './theme';
import { MotionLazy } from 'src/components/animate/motion-lazy';
function App() {
  return (
    <ThemeProvider>
      <MotionLazy>
        <Router />
      </MotionLazy>
    </ThemeProvider>
  );
}

export default App;
