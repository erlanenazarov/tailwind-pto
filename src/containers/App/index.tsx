import { useState, useEffect } from 'react';

import Button from 'components/Button';

import MediaDisplay from 'containers/MediaDisplay';

import { mediaItems, tabs } from './constants';
import { ITabItem } from './types';

const App = (): JSX.Element => {
  const [currentTab, setCurrentTab] = useState<string>('small_business');
  const [selected, setSelected] = useState<string[]>([]);

  const handleSelectMediaItem = (id: string): void => {
    setSelected(prevState => {
      if (prevState.includes(id)) {
        return prevState.filter(item => item !== id);
      }
      return [...prevState, id];
    })
  };

  const handleChangeTab = (tab: ITabItem) => (): void => {
    setCurrentTab(tab.key);
    setSelected(tab.collection);
  };

  useEffect(
    () => {
      const activeTab = tabs.find(item => item.key === currentTab);

      if (activeTab) {
        setSelected(activeTab.collection);
      }
    },
    // Need to call this effect only once at mount
    // eslint-disable-next-line
    [],
  )

  return (
    <div className="p-3 lg:p-10">
      <h2 className="font-bold text-6xl text-center text-violet-darker">Easy Turn-Key Integration</h2>
      <p className="mt-6 font-normal text-lg text-center text-light-700">
        Increase job satisfaction, improve engagement, decrease burnout and lower payroll liability<br />
        by reimagining what employees can do with their PTO.
      </p>

      <div className="overflow-auto w-full">
        <div className="mx-auto flex items-center gap-2 mt-12 pb-3 justify-center max-lg:w-96 lg:w-full">
          {tabs.map(item => (
            <Button
              key={item.key}
              isActive={currentTab === item.key}
              onClick={handleChangeTab(item)}
              className="max-lg:rounded-none max-lg:bg-transparent max-lg:border-t-0 max-lg:border-l-0 max-lg:border-r-0 max-lg:whitespace-nowrap"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>

      <MediaDisplay
        items={mediaItems}
        selected={selected}
        onChange={handleSelectMediaItem}
      />
    </div>
  );
};

export default App;
