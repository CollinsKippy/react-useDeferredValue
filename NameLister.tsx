import * as React from 'react';

type NameProps = {
  name: string;
  key: number;
};

export default function NameLister(props: NameProps): JSX.Element {
  let myList = [];
  for (let i = 0; i < 20000; i++) {}

  return <li key={props.key}>{props.name}</li>;
}
