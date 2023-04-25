import { EButtonColor } from './types';

import styles from './Button.module.css';

export const BUTTON_COLORS: Record<EButtonColor, string> = {
  [EButtonColor.PRIMARY]: styles.primary,
  // TODO: implement different variants of button
  [EButtonColor.SECONDARY]: ''
};
