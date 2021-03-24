import { Table } from 'antd';
import React from 'react';

const dataSource = [{ name: '张三', address: '海淀', tel: '123445' }];
const columns = [
  { title: 'name', dataIndex: 'name' },
  { title: '地址', dataIndex: 'address' },
  { title: '电话', dataIndex: 'tel' }
];

reactDom.render(
  <Table dataSource={dataSource} columns={columns} />,
  document.getElementById('container')
);
