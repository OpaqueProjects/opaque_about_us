import React from "react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import Menu from "../utils/Menu";

const Navbar = () => {
  const nav = useNavigate();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="z-50 sticky top-0 select-none bg-black">
      <div className="bg-bgColor text-white py-5 px-3 xl:px-0">
        <nav className="max-w-[1300px] mx-auto flex justify-between items-center">
          <h1
            className="font-black text-white text-3xl cursor-pointer "
            onClick={() => nav("/")}
          >
            INDX
          </h1>
          {/* Menu */}
          <h1 onClick={open} className="cursor-pointer">
            Menu
          </h1>
        </nav>
      </div>

      <Menu opened={opened} close={close} />
    </div>
  );
};

export default Navbar;
