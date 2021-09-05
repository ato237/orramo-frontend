import React from "react";
import { SidebarContainer, Icon, CloseIcon } from "./SidebarElements";
import { SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements";


const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to='service' onClick={toggle}>
                      Service
                  </SidebarLink>
                  <SidebarLink to='download' onClick={toggle}>
                      Download
                  </SidebarLink>
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
