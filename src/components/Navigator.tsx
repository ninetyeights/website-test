"use client";

import ButtonIcon from "@/components/buttons/ButtonIcon";
import Drawer from "@/components/Drawer";
import { WEBSITE_NAME } from "@/constants";
import { _nav } from "@/constants/nav";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdSettings } from "react-icons/md";

import Navbar from "@/components/Navbar";
import { useAppContext } from "@/lib/context";

interface Props {
  children: React.ReactNode;
}

const Navigator: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {isWide} = useAppContext()

  return (
    <>
      <Drawer
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <div className={`sticky top-0 left-0 z-20 w-full py-3 backdrop-blur-sm dark:bg-opacity-90 shadow bg-default-bg/70 text-default-fg`}>
        <div
          className={`container flex flex-wrap justify-between items-center transition-all duration-300 ${
            isWide ? "" : "lg:max-w-4xl"
          }`}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="mr-3 h-9 rounded-full"
              height={36}
              width={36}
              alt={WEBSITE_NAME}
            />
            <span className="self-center text-xl whitespace-nowrap font-semibold">
              {WEBSITE_NAME}
            </span>
          </Link>
          <Navbar nav={_nav} />
          <div className="actions flex items-center space-x-2">
            <Link href="/auth/login">登录</Link>
            <Link href="/auth/register">注册</Link>
            <ButtonIcon onClick={() => setIsOpen((x) => !x)}>
              <MdSettings className="h-5 w-5" />
            </ButtonIcon>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen">
        {/* <div className="flex-none h-[60px] w-full bg-transparent" /> */}
        <div className="bg-default-bg text-default-fg flex-1 h-full">
          {children}
        </div>
      </div>
    </>
  );
};

export default Navigator;
