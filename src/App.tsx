import HeaderComponent from './components/Header';
import NavbarComponent from './components/Navbar';
import AboutComponent from './components/About';
import ProjectsComponent from './components/Projects';
import './css/style.css';

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
