'use client'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react'
import 'overlayscrollbars/overlayscrollbars.css'
import React, { createContext, useContext, useEffect, useState } from 'react'

type ContextType = {
  isWide: boolean
  setIsWide: (isWide: boolean) => void
}

interface Props {
  children: React.ReactNode
}

export const GlobalContext = createContext<ContextType | null>(null)

export const useAppContext = () => useContext(GlobalContext) as ContextType

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [isWide, setIsWide] = useState<boolean>(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     let el = document.querySelector('.os-viewport.os-viewport-scrollbar-hidden')
  //     console.log(el?.removeAttribute('tabindex'))
  //   }, 100)
  // }, [])

  return (
    <OverlayScrollbarsComponent
      element="body"
      className="bg-default-bg text-default-fg"
      options={{ scrollbars: { autoHide: 'scroll'}}}
      defer
    >
      <GlobalContext.Provider value={{ isWide, setIsWide }}>
        {children}
      </GlobalContext.Provider>
    </OverlayScrollbarsComponent>
  )
}

export default ContextProvider

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// export const GlobalContext = createContext({
//   isWide: true,
//   setIsWide: async () => null,
// });

// export const useAppContext = () => useContext(GlobalContext);

// export const AppContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [isWide, setIsWide] = useState<boolean>(true);
//   useEffect(() => {
//     setIsWide((x) => !x);
//   }, []);

//   return (
//     <GlobalContext.Provider value={{ isWide, setIsWide }}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };
