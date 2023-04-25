import cn from 'clsx';

import styles from './Button.module.css';
import { BUTTON_COLORS } from './constants';
import { ButtonProps, EButtonColor } from './types';

const Button = (props: ButtonProps): JSX.Element => {
  const {
    isActive = false,
    color = EButtonColor.PRIMARY,
    type = 'button',
    className,
    children,
    ...buttonHtmlProps
  } = props;

  return (
    <button
      className={cn(styles.root, BUTTON_COLORS[color], { [styles.active]: isActive }, className)}
      type={type}
      {...buttonHtmlProps}
    >
      {children}
    </button>
  );
};

export default Button;
