import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
const unified = require('unified');
const markdown = require('remark-parse');
import RehypeReact from 'rehype-react';
import remark2rehype from 'remark-rehype';

interface RemoteRemarkProps {
  uri: string;
}

const RemoteRemark: FC<RemoteRemarkProps> = ({ uri }) => {
  const [markData, setMarkData] = useState();

  var processor = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(RehypeReact, { createElement: React.createElement });

  const getmark = async () => {
    if (!uri) return;
    const res = await axios.get(uri);
    setMarkData(res.data);
  };

  useEffect(() => {
    getmark();
  }, []);

  return <div>{processor.processSync(markData).contents}</div>;
};

export default RemoteRemark;
