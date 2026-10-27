import { useState } from 'react';

interface Tab {
  title: string;
  content: string;
}

interface Props {
  tabs: Tab[];
}

export default function ProcessTabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="process-tabs">
      <ul className="process-nav">
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={i === activeTab ? 'active' : ''}
            onClick={() => setActiveTab(i)}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="process-panels">
        {tabs.map((tab, i) => (
          <div key={i} className={`panel ${i === activeTab ? 'active' : ''}`}>
            <p>{tab.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}