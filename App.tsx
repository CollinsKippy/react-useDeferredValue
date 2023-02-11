import * as React from 'react';
import NameLister from './NameLister';
import './style.css';

export default function App() {
  const [name, setName] = React.useState<string>('');
  const [nameList, setNameList] = React.useState<string[]>([]);
  const [isPending, startTransition] = React.useTransition();

  const myList: string[] = React.useMemo(() => {
    return addNames(name);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);

    startTransition(() => {
      setNameList(myList);
    });
  };

  return (
    <div>
      <h1>UseTransition and UseDeferredValue</h1>
      <input
        type="text"
        value={name}
        name="name"
        id="name"
        onChange={handleChange}
      />

      <hr />

      {/* Updates 20K elements - useDeferredValue */}
      {/* <NameLister name={name} /> */}

      {/* useTransition section */}
      {isPending ? (
        'Loading...'
      ) : (
        <ul>
          {nameList.map((n, index) => {
            return <li key={index}>{n}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

function addNames(text): string[] {
  let list: string[] = [];
  for (let i = 0; i < 20000; i++) {
    list.push(text);
  }
  return list;
}
