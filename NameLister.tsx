import * as React from 'react';

type NameProps = {
  name: string;
};

export default function NameLister({ name }: NameProps): JSX.Element {
  let myList = [];
  for (let i = 0; i < 20000; i++) {
    myList.push(<div>{name}</div>);
  }

  return <div>{myList}</div>;
}
