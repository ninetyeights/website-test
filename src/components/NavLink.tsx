import Link from "next/link";
import React from "react";
// import { cva } from 'class-variance-authority'
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<Props> = ({ href, children }) => {
  const path = usePathname();
  const active = href === path;

  return (
    <Link
      href={href}
      className={`hover:text-600 active:bg-700/20 nav-btn ${ active ? "text-600 bg-700/10" : "" }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;

// const link = cva(['hover:text-green-600 active:bg-green-700/20 duration-200 transition-colors px-2.5 py-1 rounded'], {
//     variants: {
//         active: {
//             true: 'text-green-600 bg-green-700/10',
//             false: ''
//         }
//     },
//     defaultVariants: {
//         active: false
//     }
// })
