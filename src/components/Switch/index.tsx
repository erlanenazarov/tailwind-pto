import { ChangeEvent, useMemo } from 'react';
import cn from 'clsx';

import generateId from 'utils/generateId';

import styles from './Switch.module.css';
import { ISwitchProps } from './types';


const Switch = (props: ISwitchProps): JSX.Element => {
  const {
    id,
    checked,
    onChange,
    label = '',
    className,
  } = props;

  const identifier = useMemo(() => generateId(id, 'switch'), [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!onChange) return;

    onChange(e.target.checked);
  };

  return (
    <label
      htmlFor={identifier}
      className={cn(styles.root, { [styles.checked]: checked }, className)}
    >
      {label}
      <input
        id={identifier}
        className={styles.input}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
    </label>
  );
};

export default Switch;
