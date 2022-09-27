import React, {FC} from 'react';
import styles from './IndicatorIcon.module.scss'

const IndicatorIcon: FC<{ className?: string, inlineStyles?: object }> = ({className, inlineStyles}) => {
  return (
    <svg className={`${styles.icon} ${className}`} style={inlineStyles} height="16" width="16">
      <circle cx="8" cy="8" r="7" />
    </svg>
  );
};

export default IndicatorIcon;