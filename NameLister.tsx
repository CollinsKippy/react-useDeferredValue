import * as React from 'react';

type NameProps = {
  name: string;
};

/**
 * Creates 20000 components out of every input
 */
export default function NameLister({ name }: NameProps): JSX.Element {
  const deferredname = React.useDeferredValue(name);
  const myList = React.useMemo(() => {
    let lt = [];
    for (let i = 0; i < 20000; i++) {
      lt.push(<div>{deferredname}</div>);
    }

    return lt;
  }, [deferredname]);

  return <div>{myList}</div>;
}
