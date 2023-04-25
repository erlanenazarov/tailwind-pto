import cn from 'clsx';

import Switch from 'components/Switch';

import { IMediaCardProps } from './types';

const MediaCard = (props: IMediaCardProps): JSX.Element => {
  const { image, title, caption, checked, onChange } = props;

  return (
    <div
      className={cn('p-4 flex justify-between items-center rounded-2xl border-2', {
        'border-violet-soft': checked,
        'border-gray-button': !checked,
      })}
    >
      <div className="flex items-center gap-2">
        <div className="rounded-xl overflow-hidden w-12">
          <img src={image} alt={title} />
        </div>
        <div className="flex flex-col">
          <p className="m-0 font-medium text-lg text-violet-darker">
            {title}
          </p>
          <span className="font-normal text-base text-light-700">
            {caption}
          </span>
        </div>
      </div>

      <Switch checked={checked} onChange={onChange} />
    </div>
  )
};

export default MediaCard;
