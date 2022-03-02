import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";

const Dashboard = () => {
  const baseUrl = "http://localhost:3005/welcome";

  const token = localStorage.getItem("jwt");

  axios
    .post(baseUrl, {}, { headers: { Authorization: `Bearer ${token}` } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h4" gutterBottom component="h4">
        Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;
