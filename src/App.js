import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Courses from "./Components/Courses/Courses";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import CommonNavigation from "./Components/Navigation/CommonNavigation";
import NotFound from "./Components/Notfound/NotFound";
import Review from "./Components/Review/Review";
import Teachers from "./Components/Teachers/Teachers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>} />
          <Route path="/" element={<Home></Home>} />
          <Route path="/about" element={<About></About>} />
          <Route
            path="/courses"
            element={
              <Courses>
                <CommonNavigation></CommonNavigation>
              </Courses>
            }
          />
          <Route
            path="/teacher"
            element={
              <Teachers>
                <CommonNavigation></CommonNavigation>
              </Teachers>
            }
          />
          <Route path="/review" element={<Review></Review>} />
          <Route path="/*" element={<NotFound></NotFound>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
