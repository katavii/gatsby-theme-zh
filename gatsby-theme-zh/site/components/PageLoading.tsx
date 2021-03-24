import React from 'react';
import { Spin } from 'antd';

const PageLoading: React.FC = () => (
  <div
    style={{
      position: 'absolute',
      height: '100%',
      width: '100%',
      zIndex: 9999,
      marginLeft: -40,
      marginTop: -25,
    }}
  >
    <div
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
      }}
    >
      <Spin tip="资源加载中..." />
    </div>
  </div>
);

export default PageLoading;
