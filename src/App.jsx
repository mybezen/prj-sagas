import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element= <Home/> />
        </Routes>
      </Routers>
    </>
  );
}

export default App;
