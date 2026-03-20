import { Container } from "./Layout.styled";
import { Sidebar } from "../Sidebar/Sidebar";
import { Content } from "../Content/Content";

export const Layout = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
    </Container>
  );
};