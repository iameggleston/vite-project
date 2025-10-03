import React from 'react';

type Props = {
  text: string;
}

const Heading: React.FC<Props> = ({text}) => <h2>{text}</h2>;

export default Heading;
