import React, { FC } from "react";
interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  return <div>SideMenu</div>;
};

export default SideMenu;
