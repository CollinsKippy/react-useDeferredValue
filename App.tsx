import * as React from 'react';
import NameLister from './NameLister';
import './style.css';

export default function App() {
  const [name, setName] = React.useState<string>();
  const [nameList, setNameList] = React.useState<string[]>([]);

  const handleChange = (e) => {
    const text = e.target.value;
    setName(text);
  };

  return (
    <div>
      <h1>UseTransition and UseDeferredValue</h1>
      <input type="text" value={name} onChange={handleChange} />

      <hr />

      <NameLister name={name} />
    </div>
  );
}
