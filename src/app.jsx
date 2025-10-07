import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='text-2xl text-indigo-300 h-[100vh] flex-center'> Hey there my self kartik
    </div>
  );
};

export default App;