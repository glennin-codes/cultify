import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  WalletIcon,
  PowerIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import InputForm from "./pages/UploadImage/InputForm";
import Logout from "./pages/Logout";
import Profile from "./pages/profilePage";
import { Result } from "./pages/Result";
import { functionalStore } from "../../hooks/functionalStore";
import LogoutModal from "./pages/Logout";
import { useAuthStore } from "../../hooks/UseAuthStore";
import { useNavigate } from "react-router-dom";
import AllUsers from "./pages/Users";
import { AiOutlinePieChart } from "react-icons/ai";
import Annalysis from "../Annalysis";
import AgrovetList from "./pages/Agrovets";
import useAgrovetsStore from "../../hooks/AgrovetsStore";


type SidebarItem = {
  id: number;
  icon: React.ReactElement;
  label: string;
  subItems?: string[];
  useAccordion?: boolean;
};

const accordionItems: SidebarItem[] = [
  {
    id: 1,
    icon: <PresentationChartBarIcon className="h-5 w-5" />,
    label: "Dashboard",
    subItems: ["Predict Disease", "Result"],
    useAccordion: true,
  },
];

const nonAccordionItems: SidebarItem[] = [

  {
    id: 5,
    label: "Users",
    icon: <TableCellsIcon className="h-5 w-5" />,
  },
  {
    id: 6,
    label: "Annalysis",
    icon: <AiOutlinePieChart className="h-5 w-5" />



  },
  {
    id: 7,
    icon: <UserCircleIcon className="h-5 w-5" />,
    label: "Profile",
  },
  {
    id: 8,
    icon: <PowerIcon className="h-5 w-5" />,
    label: "Log Out",
  },

];

function SidebarWithContentSeparator() {
  const [open, setOpen] = useState<number>(0);
  const [selectedContent, setSelectedContent] = useState(<InputForm />);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { disease ,setClear} = functionalStore();
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const navigate = useNavigate();
  const { logout, loadLocalStorage, activeUser } = useAuthStore();

  const {
    agrovets,
    successMessage
  } = useAgrovetsStore((state) => ({
    agrovets: state.agrovets,
   successMessage:state.successMessage
  }));
  const handleLogout = () => {
   
    //clearing the result store 
   setClear();
    // Perform logout logic here
    logout();

    // Close the modal
    setIsLogoutModalOpen(false);
    navigate("/");
  };

  const handleCloseModal = () => {
    // Close the modal

    setIsLogoutModalOpen(false);
  };

  useEffect(() => {
    if (disease) {
      setSelectedContent(<Result />);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [disease]);
  useEffect(() => {
    if(agrovets && agrovets.length > 0){
      setSelectedContent(< AgrovetList />);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    
    }
  }, [agrovets])

  const handleOpen = (value: number) => {
    setOpen((prevOpen) => (prevOpen === value ? 0 : value));
    // // When opening an accordion, set the default content based on the first subitem
    // if (accordionItems.find((item) => item.id === value)?.subItems) {
    //   setSelectedContent(<StorageInfoCard />);
    // }
  };

  const renderAccordionContent = (subItem: string) => {
    // Render the corresponding component based on the selected subitem
    switch (subItem) {
      case "Predict Disease":
        setSelectedContent(<InputForm />);
        break;
      case "Result":
        setSelectedContent(<Result />);
        break;
      default:
        break;
    }
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  const handleItemClick = (label: string) => {
    switch (label) {
      case "Profile":
        setSelectedContent(<Profile />);
        break;
      case "Users":
        setSelectedContent(<AllUsers />);
        break;
      case "Annalysis":
        setSelectedContent(<Annalysis />);
        break;
      case "Log Out":
        setSelectedContent(<InputForm />);
        setIsLogoutModalOpen(true);
        break;
      default:
        break;
    }
    if (isMobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };


  // Effect to get the user role from localStorage
  useEffect(() => {
    loadLocalStorage()
  }, []);

  console.log(activeUser);

  return (
    <div className="flex md2:mt-20  mt-24 mb-10">
      <button
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        id="menu-btn"
        className={`block hamburger md2:hidden  left-5 focus:outline-none  ${isMobileMenuOpen ? "open" : ""
          }`}
      >
        <span
          style={{ backgroundColor: "green" }}
          className="hamburger-top text-blue-500"
        ></span>
        <span
          style={{ backgroundColor: "green" }}
          className="hamburger-middle text-blue-500"
        ></span>
        <span
          style={{ backgroundColor: "green" }}
          className="hamburger-bottom text-blue-500"
        ></span>
      </button>
      <div
        className={`${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md2:translate-x-0   transition-transform  duration-300 ease-in-out md2:duration-0 md2:ease-in-out h-[calc(100vh-2rem)] bg-white w-full max-w-[20rem] p-4  fixed md2:static  mt-5`}
      >
        <div className=" mb-2 p-4">
          <Typography variant="h5">Welcome {activeUser?.role === "admin" ? 'Admin' : 'User'} {activeUser?.name} </Typography>
        </div>
        <List>
          {accordionItems.map((item) => (
            <Accordion
              key={item.id}
              open={open === item.id}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${open === item.id ? "rotate-180" : ""
                    }`}
                />
              }
            >
              <ListItem className="p-0 " selected={open === item.id}>
                <AccordionHeader
                  onClick={() => handleOpen(item.id)}
                  className="border-0  p-3"
                >
                  <ListItemPrefix className=" ">{item.icon}</ListItemPrefix>
                  <Typography className="mr-auto  font-lg  ">
                    {item.label}
                  </Typography>
                </AccordionHeader>
              </ListItem>
              {item.subItems && (
                <AccordionBody className="py-1">
                  <List className="p-0">
                    {item.subItems.map((subItem, index) => (
                      <ListItem
                        className=""
                        onClick={() => renderAccordionContent(subItem)}
                        key={index}
                      >
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        {subItem}
                      </ListItem>
                    ))}
                  </List>
                </AccordionBody>
              )}
            </Accordion>
          ))}
          <hr className="my-2 border-blue-gray-50 " />
          {nonAccordionItems.map((item) => (

            (activeUser?.role !== 'admin' && (item.label === 'Users')) ? null :
              <ListItem
                className=""
                onClick={() => handleItemClick(item.label)}
                key={item.id}
              >
                <ListItemPrefix>{item.icon}</ListItemPrefix>
                {item.label}
              </ListItem>
          ))}
        </List>
      </div>
      <div className="md:flex-1  p-4 w-full ">{selectedContent}</div>
      {/* Render the logout modal */}
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onClose={handleCloseModal}
        onLogout={handleLogout}
      />
    </div>
  );
}

export default SidebarWithContentSeparator;
