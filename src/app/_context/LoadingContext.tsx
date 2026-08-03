'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface LoadingContextType {
  isPreloaderFinished: boolean;
  finishPreloader: () => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isPreloaderFinished: false,
  finishPreloader: () => {},
});

export function LoadingProvider({ children }: { children: ReactNode }) {
  const [isPreloaderFinished, setIsPreloaderFinished] = useState(false);

  const finishPreloader = () => {
    setIsPreloaderFinished(true);
  };

  return (
    <LoadingContext.Provider value={{ isPreloaderFinished, finishPreloader }}>
      {children}
    </LoadingContext.Provider>
  );
}

export const useLoading = () => useContext(LoadingContext);