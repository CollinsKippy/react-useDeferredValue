import * as React from 'react';

type NameProps = {
  name: string;
};

export default function NameLister({ name }: NameProps): JSX.Element {
  const myList = React.useMemo(() => {
    let lt = [];
    for (let i = 0; i < 20000; i++) {
      lt.push(<div>{name}</div>);
    }

    return lt;
  }, [name]);

  return <div>{myList}</div>;
}
