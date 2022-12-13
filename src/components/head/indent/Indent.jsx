import React from 'react';

export default function Indent({ indentSize = 100 }) {
  return <div style={{ width: '100%', height: indentSize + 'px' }}></div>;
}
