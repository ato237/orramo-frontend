import React from "react";
import { SidebarContainer, Icon, CloseIcon } from "./SidebarElements";
import { SidebarWrapper, SidebarMenu,SideBtnWrap,SidebarLinkRoute, SidebarRoute} from "./SidebarElements";


const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLinkRoute to='/' onClick={toggle}>
                   Currency Calculator
                  </SidebarLinkRoute>
          <SidebarLinkRoute to='/converter' onClick={toggle}>
                      Currency Converter
                  </SidebarLinkRoute>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to ='/download' onClick={toggle}>
                      Get the app
                  </SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
