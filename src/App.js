import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { GlobalStyles } from "./globalStyles";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <>
      <GlobalStyles/>
      <Routes>
        <Route path='/' element={<Header/>}>
         <Route index element={<Homepage/>}/>
        </Route>

      </Routes>
      

    </>
  );
}

export default App;
