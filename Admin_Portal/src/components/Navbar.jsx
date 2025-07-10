// File: src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { Button, Space, Switch, Dropdown, Menu } from 'antd';
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setThemeMode }) => {
  const { user, logout } = useAuth();
  const [theme, setTheme] = useState('light');
  const navigate = useNavigate();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const toggleTheme = (checked) => {
    setTheme(checked ? 'dark' : 'light');
    setThemeMode(checked ? 'dark' : 'light');
  };

  return (
    <div className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-gray-800">
      <div className="text-xl font-bold text-black dark:text-white">Admin Portal</div>
      <Space>
        <SunOutlined className='text-white'/>
        <Switch checked={theme === 'dark'} onChange={toggleTheme} />
        <MoonOutlined className='text-white'/>
        {user && (
          <>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="profile" onClick={() => navigate('/profile')}>
                    View Profile
                  </Menu.Item>
                </Menu>
              }
              placement="bottom"
              trigger={['hover']}
            >
              <span
                className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold cursor-pointer hover:bg-blue-200 transition"
                style={{ display: 'inline-block' }}
              >
                {user.displayName}
              </span>
            </Dropdown>
            <Button onClick={handleLogout} danger>
              Logout
            </Button>
          </>
        )}
      </Space>
    </div>
  );
};

export default Navbar;
