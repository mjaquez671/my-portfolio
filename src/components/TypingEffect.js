import React from 'react';
import TypingEffect from 'react-typing-effect';

const TypingComponent = () => {
  return (
    <div className="text-center">
      <TypingEffect
        text={["Hi, I'm [Your Name]"]}
        speed={100}
        eraseSpeed={50}
        eraseDelay={2000}
        typingDelay={500}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => (
          <h1 className="text-5xl font-bold text-white">{text}</h1>
        )}
      />
    </div>
  );
};

export default TypingComponent;
