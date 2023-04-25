import cn from 'clsx';

import LaurenRobson from 'assets/img/LaurenRobson.png';

import MediaCard from 'components/MediaCard';

import { IMediaDisplayProps, IMediaItem, EMediaItemCorner } from './types';
import styles from './MediaDisplay.module.css';

const MediaDisplay = (props: IMediaDisplayProps): JSX.Element => {
  const { items = [], selected = [], onChange } = props;

  const leftCorner = items.filter(item => item.corner === EMediaItemCorner.LEFT);
  const rightCorner = items.filter(item => item.corner === EMediaItemCorner.RIGHT);

  const renderLines = (targetItems: IMediaItem[]): JSX.Element[] => targetItems.map(item => (
    <div
      className={cn(styles.line, { [styles.active]: selected.includes(item.id) })}
      key={item.id}
    />
  ));

  const handleSelectMediaItem = (id: string) => () => {
    if (!onChange) return;

    onChange(id);
  };

  return (
    <div className="mt-20 flex items-center justify-around max-lg:flex-col max-lg:gap-5">
      <div className="grow flex flex-col gap-5 max-lg:w-full">
        {leftCorner.map(item => (
          <MediaCard
            key={item.id}
            title={item.title}
            caption={item.caption}
            image={item.image}
            checked={selected.includes(item.id)}
            onChange={handleSelectMediaItem(item.id)}
          />
        ))}
      </div>

      <div className={cn(styles.linesWr, styles.leftLines, 'lg:flex sm:hidden hidden')}>
        {renderLines(leftCorner)}
      </div>

      <div className="rounded-2xl border-2 border-violet-soft bg-purple-100 lg:w-testimonial-wrapper max-lg:-order-1 max-lg:w-full">
        <div className="flex justify-center overflow-hidden -mt-10">
          <img src={LaurenRobson} alt="Lauren Robson" className="w-20" />
        </div>
        <div className="flex flex-col items-center">
          <p className="font-bold text-xl text-violet-dark mb-1.5">Lauren Robson</p>
          <span className="font-normal text-base text-light-700">HR Director</span>
        </div>
        <div className="text-center px-10 pb-8 mt-5">
          <p className="font-normal text-base text-violet-darker">
            “I want to lower PTO liability and keep my employess happy. I want to lower PTO liability.”
          </p>
        </div>
      </div>

      <div className={cn(styles.linesWr, styles.rightLines, 'lg:flex sm:hidden hidden')}>
        {renderLines(rightCorner)}
      </div>

      <div className="grow flex flex-col gap-5 max-lg:w-full">
        {rightCorner.map(item => (
          <MediaCard
            key={item.id}
            title={item.title}
            caption={item.caption}
            image={item.image}
            checked={selected.includes(item.id)}
            onChange={handleSelectMediaItem(item.id)}
          />
        ))}
      </div>
    </div>
  )
};

export default MediaDisplay;
