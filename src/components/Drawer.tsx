import ButtonIcon from "@/components/buttons/ButtonIcon";
import { useAppContext } from "@/lib/context";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { Theme, ThemeType, useTheme } from "./preferences";

type stateBoolean = React.Dispatch<React.SetStateAction<boolean>>;

interface Props {
  isOpen: boolean;
  setIsOpen: stateBoolean;
}

const colors = ["red", "green"];
const modes = ["light", "dark"];


const Drawer: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  const [theme, setTheme] = useTheme();
  const {isWide, setIsWide} = useAppContext()
  
  const toggleTheme = (t: ThemeType) => {
    localStorage.setItem('ne-theme', t)
    setTheme(t)
  }

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          unmount={false}
          className="overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="flex w-full h-screen">
            {/* <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-in duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-30"
                        entered="opacity-30"
                        leave="transition-opacity ease-out duration-300"
                        leaveFrom="opacity-30"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="z-40 fixed inset-0 bg-black opacity-30 transition-opacity" />
                    </Transition.Child> */}
            <Dialog.Overlay className="z-40 fixed inset-0 opacity-0" />

            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div
                className={`flex flex-col backdrop-blur-sm z-50 w-[320px] fixed right-0 inset-y-0 shadow-2xl divide-y divide-dashed text-default-fg bg-default-bg/70`}
              >
                <Dialog.Title className="text-lg pt-4 pb-4 pr-3 pl-5 flex items-center justify-between">
                  <span>偏好设置</span>
                  <ButtonIcon
                    className="p-1"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <MdClose className="w-6 h-6" />
                  </ButtonIcon>
                </Dialog.Title>
                <div className="p-5">
                  <Theme className="mb-5" theme={theme} toggleTheme={toggleTheme} />
                  <div>
                    <h4 className="mb-2">模式</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        className={`w-full h-20 border border-dashed rounded-lg flex items-center justify-center hover:shadow-lg duration-300 transition-all${isWide ? ' shadow-lg hover:bg-200/20' : ' hover:bg-gray-200/30'}`}
                        onClick={() => setIsWide(true)}
                      >
                        宽屏
                      </button>
                      <button
                        className={`w-full h-20 border border-dashed rounded-lg flex items-center justify-center hover:shadow-lg duration-300 transition-all${isWide === false ? ' shadow-lg hover:bg-200/20' : ' hover:bg-gray-200/30'}`}
                        onClick={() => setIsWide(false)}
                      >
                        默认
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Drawer;
