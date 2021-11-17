import HeaderComponent from './components/Header';
import NavbarComponent from './components/Navbar';
import AboutComponent from './components/About';
import './css/style.css';
import ProjectsComponent from './components/Projects';

function App() {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <AboutComponent />
      <ProjectsComponent />
    </>
  );
}

export default App;
