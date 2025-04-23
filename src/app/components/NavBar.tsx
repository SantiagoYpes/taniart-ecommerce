"use client";
import React from "react";
import {
  Collapse,
  Typography,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { FaBagShopping } from "react-icons/fa6"; 
import { TagIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { SidebarWithBurgerMenu } from "./CartDialog";

const navListMenuItems = [
  {
    title: "Caleidoscopio",
    description: "Find the perfect solution for your needs.",
    icon: TagIcon,
  },
  {
    title: "Pecadora",
    description: "Meet and learn about our dedication",
    icon: TagIcon,
  },
  {
    title: "Coral",
    description: "Find the perfect solution for your needs.",
    icon: TagIcon,
  },
  {
    title: "Ilustación",
    description: "Learn how we can help you achieve your goals.",
    icon: TagIcon,
  },
  {
    title: "Dibujo Técnico",
    description: "Reach out to us for assistance or inquiries",
    icon: TagIcon,
  },
];

export const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem placeholder={"Menu"} className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-white w-6",
            })}
          </div>
          <div>
            <Typography placeholder={"Menu"}
              variant="h6"
              color="white"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography placeholder={"Menu"}
              variant="paragraph"
              className="text-xs !font-medium text-white"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
        <hr className="border-t border-white m-1 w-3/4 mx-auto"/>
      </a>
      
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography placeholder={"Menu"} as="div" variant="small" className="font-medium">
            <ListItem placeholder={"Menu"}
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white transition-all duration-200  hover:scale-105 hover:brightness-125 hover:text-[rgb(241,203,250) cursor-pointer"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              COLECCIONES
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList placeholder={"Menu"} className="hidden rounded max-w-screen-xl lg:block bg-black shadow-[0_0_10px_1px_rgb(0,0,0)]">
          <ul className="grid grid-cols-1 gap-y-3 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

type NavItemType ={
  title :string,
  redirect: string
}
export const NavItem = ({title, redirect}:NavItemType) => {
  const router = useRouter();
  return (
   
    <Typography placeholder={title}
      as="a"
      variant="small"
      color="white"
      className="font-medium"
      onClick={()=>router.push(redirect)}
    >
      <ListItem placeholder={title} className="flex items-center gap-2 py-2 pr-4 transition-all duration-200 hover:scale-105 hover:brightness-125 hover:text-[rgb(241,203,250)] cursor-pointer">{title}</ListItem>
    </Typography>
  )
}




export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black flex justify-between items-center px-8 py-4">
          <div className="text-xl font-bold text-white font-sans">TANIART</div>
          <div className="flex space-x-6 text-sm">
            <NavItem title="INICIO" redirect="/"/>
            <NavListMenu />
            <NavItem title="PRODUCTOS" redirect="/products"/>
            <NavItem title="MARCA" redirect="/branding"/>
          </div>
            <SidebarWithBurgerMenu/>
        </nav>
  )
}
