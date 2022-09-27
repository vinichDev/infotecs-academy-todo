import React, {FC} from 'react';
import styles from './PlusIcon.module.scss'

const PlusIcon:FC<{className?: string}> = ({className}) => {
  return (
    <svg className={`${styles.icon} ${className}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
         width="24" height="24"
         viewBox="0 0 24 24">
      <path
            d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
    </svg>
  );
};

export default PlusIcon;