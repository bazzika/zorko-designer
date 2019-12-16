import React from 'react';
import {MainMenuItems, MainMenuType} from '../../../components/VerticalMenu';
import {SidebarLayout} from '../../../layout/SidebarLayout';
import {SidebarMenu} from './SidebarMenu';
import {SidebarContent} from './SidebarContent';

interface Props {
  activeMenu: MainMenuType;
}

const defaultProps: Partial<Props> = {
  activeMenu: MainMenuItems.NONE
};

export const Sidebar = (props: Props) => {
  return (
    <SidebarLayout
      renderMenubar={() => <SidebarMenu activeMenu={props.activeMenu} />}
      renderContent={() => <SidebarContent />}
    />
  );
};

Sidebar.defaultProps = defaultProps;
