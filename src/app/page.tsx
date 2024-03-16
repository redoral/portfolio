import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex min-h-screen flex-col lg:w-[1024px] lg:m-auto lg:p-0 pt-28 lg:pt-28 px-8 text-neutral-600 '>
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
