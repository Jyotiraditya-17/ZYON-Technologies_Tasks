import { Layout, Button, Avatar, Typography, Table , Space } from "antd";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Header, Content } = Layout;

export default function Dashboard() {
  
   const [employees] = useState([
    {
      id: 'WY01',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'Will Williams',
      email: 'williams@gmail.com',
      contact: '2457878540',
      identity: 'Passport - 012345678',
      dob: '1995-04-01',
      joining: '2019-01-29',
      blood: 'B+',
      type: 'Permanent Position',
    },
    {
      id: 'WY02',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      name: 'AB Leo Allen',
      email: 'leoallen06905@gmail.com',
      contact: '2450157695',
      identity: 'Passport - 914575421',
      dob: '2000-12-15',
      joining: '2020-04-01',
      blood: 'AB+',
      type: 'Permanent Position',
    },
    {
      id: 'WY03',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      name: 'Christen Moore',
      email: 'moorechristen@gmail.com',
      contact: '4578545555',
      identity: 'Passport - 100035420',
      dob: '1995-04-20',
      joining: '2021-04-01',
      blood: 'A+',
      type: 'Part-time Employee',
    },
    {
      id: 'WY04',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'John Carter',
      email: 'johncarter@gmail.com',
      contact: '9876543210',
      identity: 'Passport - 234567890',
      dob: '1992-07-15',
      joining: '2018-06-10',
      blood: 'O+',
      type: 'Permanent Position',
    },
    {
      id: 'WY05',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Emily Clark',
      email: 'emilyclark@gmail.com',
      contact: '8765432109',
      identity: 'Passport - 345678901',
      dob: '1993-11-23',
      joining: '2017-09-12',
      blood: 'B-',
      type: 'Permanent Position',
    },
    {
      id: 'WY06',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      name: 'Michael Smith',
      email: 'michaelsmith@gmail.com',
      contact: '7654321098',
      identity: 'Passport - 456789012',
      dob: '1989-03-30',
      joining: '2016-02-18',
      blood: 'A-',
      type: 'Contract Employee',
    },
    {
      id: 'WY07',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      name: 'Sophia Turner',
      email: 'sophiaturner@gmail.com',
      contact: '6543210987',
      identity: 'Passport - 567890123',
      dob: '1998-05-10',
      joining: '2022-01-05',
      blood: 'O-',
      type: 'Part-time Employee',
    },
    {
      id: 'WY08',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      name: 'David Lee',
      email: 'davidlee@gmail.com',
      contact: '5432109876',
      identity: 'Passport - 678901234',
      dob: '1990-09-19',
      joining: '2015-11-20',
      blood: 'AB-',
      type: 'Permanent Position',
    },
    {
      id: 'WY09',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      name: 'Olivia Brown',
      email: 'oliviabrown@gmail.com',
      contact: '4321098765',
      identity: 'Passport - 789012345',
      dob: '1997-02-28',
      joining: '2021-08-15',
      blood: 'B+',
      type: 'Contract Employee',
    },
    {
      id: 'WY10',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      name: 'James Wilson',
      email: 'jameswilson@gmail.com',
      contact: '3210987654',
      identity: 'Passport - 890123456',
      dob: '1994-12-05',
      joining: '2019-03-22',
      blood: 'A+',
      type: 'Permanent Position',
    },
  ]);

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (img) => <Avatar src={img} />
    },
    { title: 'Name', dataIndex: 'name', key: 'name', render: (text) => <a>{text}</a> },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    { title: 'Contact', dataIndex: 'contact', key: 'contact' },
    { title: 'Identity', dataIndex: 'identity', key: 'identity' },
    { title: 'DOB', dataIndex: 'dob', key: 'dob' },
    { title: 'Joining', dataIndex: 'joining', key: 'joining' },
    { title: 'Blood', dataIndex: 'blood', key: 'blood' },
    { title: 'Emp Type', dataIndex: 'type', key: 'type' },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space>
          <Button type="primary">View</Button>
          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </Space>
      )
    }
  ];

  return (
    <Layout className="h-screen">
      <Header className="bg-blue-500 text-white flex justify-center px-4 items-center">
        <h1 className="text-2xl font-bold text-white m-0">Admin Dashboard</h1>
      </Header>
      <Content className="p-4">
        <h1 className="text-2xl font-semibold mb-4">All Employee List</h1>
        <Table columns={columns} dataSource={employees} rowKey="id" />
      </Content>
    </Layout>
  );
}

