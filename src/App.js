import "./App.css";
import { Assets } from "./assets/assets";
import NotFound from "./components/404";
import NotFount from "./components/404";
import ComingSoon from "./components/ComingSoon";

import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />

        <Route
          path="/wedding/:couples"
          element={
            <Home
              data={{
                groomName: "Arun",
                brideName: "Anjali",
                venue: "Rose Hill Auditorium",
                date: "10 May 2024",
                time: "10:30 AM",
                day: "20",
                month: "May",
                weekday: "Monday",
                studio: Assets?.Bokehads,
              }}
            />
          }
        />

        <Route path="demo" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
