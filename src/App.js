
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Nav from './Nav'
import Section from './Section'
import SectionTwo from './SectionTwo'
import Main from './Main';
import Calm from './Calm';
import CalmTwo from './CalmTwo';
import CalmThree from './CalmThree';
import GratTime from './GratTime';

function App() {
  return (
    <div>
      <div>
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/section" element={<Section/>} />
          <Route path="/calm" element={<Calm/>} />
          <Route path="/calmtwo" element={<CalmTwo/>} />
          <Route path="/calmthree" element={<CalmThree/>} />
          <Route path="/grattime" element={<GratTime/>} />
          <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
          {/* <Route path="/login" component={Login} /> */}
      </Routes>
    </div>
      {/* <Nav/>
      <Home/>
      <Section/>
      <SectionTwo/> */}
    </div>
  );
}

export default App;
