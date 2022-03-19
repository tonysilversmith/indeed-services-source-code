import { styled } from "@mui/system";
import "./App.css";

//components
import Header from "./components/Header";

const Footer = styled("div")(({ theme }) => ({
  padding: 0,
  height: "80px",
  color: "white",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  backgroundSize: "cover",
  "@media (max-width: 650px)": {
    height: "150px",
  },
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Footer>Tonysilversmith. All rights reserved. &copy; </Footer>
    </div>
  );
}

export default App;
