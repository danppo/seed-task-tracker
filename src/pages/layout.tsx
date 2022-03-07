import { Outlet} from "react-router-dom";
import MenuBar from "../components/menuBar";
import Container from "@mui/material/Container";


  const Layout = () => {
    return (
      <div>
        <MenuBar />
        <Container maxWidth="md">
          <Outlet />
        </Container>
      </div>
    );
  };

  export default Layout;
