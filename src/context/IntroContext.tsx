import React, { createContext, useContext, useState, useCallback } from 'react';

interface IntroContextType {
  isIntroComplete: boolean;
  isSplashFullyDone: boolean;
  completeIntro: () => void;
  setSplashFullyDone: () => void;
  replayIntro: () => void;
}

const IntroContext = createContext<IntroContextType>({
  isIntroComplete: false,
  isSplashFullyDone: false,
  completeIntro: () => {},
  setSplashFullyDone: () => {},
  replayIntro: () => {},
});

export const IntroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isIntroComplete, setIsIntroComplete] = useState(false);
  const [isSplashFullyDone, setIsSplashFullyDoneState] = useState(false);

  const completeIntro = useCallback(() => {
    setIsIntroComplete(true);
  }, []);

  const setSplashFullyDone = useCallback(() => {
    setIsSplashFullyDoneState(true);
  }, []);

  const replayIntro = useCallback(() => {
    setIsIntroComplete(false);
    setIsSplashFullyDoneState(false);
  }, []);

  return (
    <IntroContext.Provider value={{ isIntroComplete, isSplashFullyDone, completeIntro, setSplashFullyDone, replayIntro }}>
      {children}
    </IntroContext.Provider>
  );
};

export const useIntro = () => useContext(IntroContext);

