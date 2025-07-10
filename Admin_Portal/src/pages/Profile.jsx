import React, { useRef, useState } from 'react';
import { Card, Avatar, Typography, Upload, message, Button, Modal } from 'antd';
import { CameraOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAuth } from '../context/authContext';
import { deleteUser } from "firebase/auth";

const { Title, Text } = Typography;

const Profile = () => {
  const { user } = useAuth();
  const [profilePic, setProfilePic] = useState(user?.photoURL);
  const [deleting, setDeleting] = useState(false);


  const employeeType = user?.employeeType || "Admin";
  const activeSince = user?.metadata?.creationTime
    ? new Date(user.metadata.creationTime).toLocaleDateString()
    : "N/A";

  const handleChange = (info) => {
    const file = info.file.originFileObj;
    if (file) {
      const reader = new FileReader();
      reader.onload = e => setProfilePic(e.target.result);
      reader.readAsDataURL(file);
      message.success('Profile picture updated (preview only)');
    }
  };


  const handleDeleteAccount = async () => {
    setDeleting(true);
    try {
      await deleteUser(user);
      message.success('Account deleted successfully.');
    } catch (error) {
      message.error(error.message || 'Failed to delete account.');
    }
    setDeleting(false);
  };

  const confirmDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete your account?',
      content: 'This action cannot be undone.',
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      onOk: handleDeleteAccount,
    });
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card style={{ width: 400, textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <Avatar
                size={100}
                src={profilePic}
                icon={<UserOutlined />}
                style={{ marginBottom: 0 }}
              />
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={handleChange}
              >
                <span
                  style={{
                    position: 'absolute',
                    bottom: 4,
                    right: 4,
                    background: '#fff',
                    borderRadius: '50%',
                    padding: 6,
                    boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  title="Change Profile Picture"
                >
                  <CameraOutlined style={{ fontSize: 20, color: '#1890ff' }} />
                </span>
              </Upload>
            </div>
            <div style={{ textAlign: 'left' }}>
              <Title level={4} style={{ margin: 0 }}>{user?.displayName || "User"}</Title>
              <Text type="secondary">{user?.email}</Text>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 24, textAlign: 'left' }}>
          <p><b>Employee Type:</b> {employeeType}</p>
          <p><b>Active Since:</b> {activeSince}</p>
        </div>
        <Button
          type="primary"
          danger
          icon={<DeleteOutlined />}
          loading={deleting}
          style={{ marginTop: 24, width: '100%' }}
          onClick={confirmDelete}
        >
          Delete Account
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
