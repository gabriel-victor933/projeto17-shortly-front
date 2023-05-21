import { BrowserRouter, Routes, Route } from "react-router-dom"
import Initial from "./pages/initial";
import SignUp from "./pages/SignUp";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Initial />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/home" element={<></>}/>
        <Route path="/ranking" element={<></>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
