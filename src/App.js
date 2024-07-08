import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar2 from "./components/Sidebar2";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import {Box, Stack} from "@mui/material";


function App() {
  return (
    <Box>
      <Navbar></Navbar>  
      <Stack direction="row" spacing={2} justifyContent={"space-between"}>  
        <Sidebar2></Sidebar2>  
          <Feed></Feed>
        <Rightbar></Rightbar>
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
