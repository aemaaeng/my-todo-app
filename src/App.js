import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Today from "./Pages/Today";
import Calendar from "./Pages/Calendar";
import Developer from "./Pages/Developer";

function App() {
  return (
    <BrowserRouter>
      {/* 라우터로 엔드포인트 설정 및 각 루트로 링크하기 */}
      <div className="App">
        <main>
          <Sidebar />
          <section className="features">
            <Routes>
              <Route path="/" element={<Today />}></Route>
              <Route path="/calendar" element={<Calendar />}></Route>
              <Route path="/developer" element={<Developer />}></Route>
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
