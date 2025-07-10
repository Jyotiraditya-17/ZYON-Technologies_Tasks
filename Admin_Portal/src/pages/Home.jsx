import { Button, Layout, Typography } from "antd";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Home() {
  const { login, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
    navigate("/dashboard");
   }
  } , [user, navigate]);

  return (
    <Layout className="h-screen text-center">

      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-4xl font-bold py-6 shadow-lg tracking-wide">
         Admin Portal Dashboard
      </div>

      <Content className="flex flex-col justify-center items-center gap-4">
        <Title>Welcome to Admin Dashboard</Title>
        <p className="text-gray-400 text-base max-w-xl">
          Manage your employees securely with modern tools and a sleek interface.
        </p>

        <Button
          type="primary"
          size="large"
          className="bg-purple-700 hover:bg-purple-800 text-white border-none transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-purple-700/50"
          onClick={login}
        >
          Sign in with Google
        </Button>    
          
      </Content>
    </Layout>
  );
}
