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
      <Header className="bg-blue-500 text-white text-xl">Admin Portal</Header>
      <Content className="flex flex-col justify-center items-center gap-4">
        <Title>Welcome to Admin Dashboard</Title>
        <Button type="primary" onClick={login}>Login with Google</Button>
      </Content>
    </Layout>
  );
}
