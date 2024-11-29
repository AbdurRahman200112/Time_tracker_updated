import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "../../../img/profile.png";
import { useNavigate } from 'react-router-dom';
import Rectange from "../../../img/Rectangle.png";
import { RiLogoutBoxRLine } from "react-icons/ri"; // For Logout icon

import {
  Navbar,
  Typography,
  IconButton,
  Breadcrumbs,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { MdPersonOutline, MdLockOutline, MdLogout } from "react-icons/md"; // React Icons
import { MdNotificationsNone } from "react-icons/md";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useMaterialTailwindController, setOpenSidenav } from "@/context";
export function DashboardNavbar() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  const navigate = useNavigate();

  return (
    <div>
      <Navbar
        color={fixedNavbar ? "white" : "transparent"}
        className={`rounded-xl transition-all ${fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
          }`}
        fullWidth
        blurred={fixedNavbar}
      >
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
          {/* Breadcrumbs and Page Title */}
          <div className="capitalize">
            <Breadcrumbs
              className={`bg-transparent p-0 transition-all ${fixedNavbar ? "mt-1" : ""
                }`}
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
              <Typography variant="small" color="blue-gray" className="font-normal">
                {page}
              </Typography>
            </Breadcrumbs>
            <Typography variant="h6" color="blue-gray">
              {page}
            </Typography>
          </div>

          {/* Navbar Actions */}
          <div className="flex items-center">
            {/* Sidenav Toggle */}
            <IconButton
              variant="text"
              color="blue-gray"
              className="grid xl:hidden"
              onClick={() => setOpenSidenav(dispatch, !openSidenav)}
            >
              <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
            </IconButton>

            {/* Notifications Icon */}
            <div
              className="mr-3 flex items-center justify-center w-14 h-12 rounded-full cursor-pointer"
              style={{ backgroundColor: "#fff2d4" }}
              onClick={() => navigate("messagesCard")} // Redirect to the MessageCard page
            >
              <MdNotificationsNone
                className="text-black text-lg"
                style={{ fontSize: "25px" }}
              />
            </div>

            {/* Profile Dropdown */}
            <Menu className="mr-5">
              {/* Profile Icon/Menu Trigger */}
              <MenuHandler>
                <img
                  src={Profile} // Placeholder for the profile image
                  className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer"
                  style={{ backgroundColor: "#fff2d4" }}
                  alt="Profile"
                />
              </MenuHandler>

              {/* Menu List */}
              <MenuList className="w-max rounded-lg shadow-lg bg-white p-0">
                {/* Background Image Section */}
                <div
                  className="relative w-full bg-cover bg-center rounded-t-lg"
                  style={{
                    backgroundImage: `url(${Rectange})`, // Corrected dynamic image usage
                    height: "100px",
                  }}
                >
                  {/* Profile Avatar */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <Avatar
                      src={Profile} // Placeholder for avatar
                      alt="User Avatar"
                      size="xl"
                      variant="circular"
                      className="border-4 border-white"
                    />
                  </div>
                </div>

                {/* Menu Items */}
                <div className="mt-16 px-4">
                  {/* Profile Option */}
                  <MenuItem className="flex items-center gap-4 py-3 hover:bg-gray-100 rounded-lg">
                    <MdPersonOutline className="h-6 w-6 text-blue-gray-800" />
                    <Typography
                      variant="small"
                      className="text-blue-gray-800 font-medium"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Profile
                    </Typography>
                  </MenuItem>

                  {/* Change Password Option */}
                  <MenuItem className="flex items-center gap-4 py-3 hover:bg-gray-100 rounded-lg">
                    <MdLockOutline className="h-6 w-6 text-blue-gray-800" />
                    <Typography
                      variant="small"
                      className="text-blue-gray-800 font-medium"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Change Password
                    </Typography>
                  </MenuItem>

                  {/* Logout Option */}
                  <MenuItem className="flex items-center gap-4 py-3 hover:bg-gray-100 rounded-lg">
                    <RiLogoutBoxRLine className="h-6 w-6 text-blue-gray-800" />
                    <Typography
                      variant="small"
                      className="text-blue-gray-800 font-medium"
                      style={{ fontFamily: "Poppins" }}
                    >
                      Logout
                    </Typography>
                  </MenuItem>
                </div>
              </MenuList>
            </Menu>
          </div>
        </div>
      </Navbar>

      {/* Render the active component */}
    </div>
  );
}

DashboardNavbar.displayName = "DashboardNavbar";

export default DashboardNavbar;