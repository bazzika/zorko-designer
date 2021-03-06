import React, {ReactNode} from 'react';
import {MainMenuItems, MainMenuType} from './VerticalMenu';
import classNames from 'classnames';

interface Props {
  type: MainMenuType;
  isActive?: boolean;
  children: ReactNode;
}

const defaultProps: Partial<Props> = {
  type: MainMenuItems.NONE,
  isActive: false
};

export const VerticalMenuItem = (props: Props) => {
  return (
    <div
      className={classNames('inline-block h-9 w-9 p-1', {
        'bg-gray-400': props.isActive
      })}
    >
      {props.children}
    </div>
  );
};

VerticalMenuItem.defaultProps = defaultProps;
