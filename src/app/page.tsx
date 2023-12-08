import About from './components/About';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col w-[1024px] m-auto text-neutral-600'>
      {/** NAV */}
      <nav className='py-6 flex items-center space-x-10'>
        <h1 className='text-2xl font-bold'>redoral</h1>
        <ul className='space-x-6'>
          <li className='float-left'>
            <button>About</button>
          </li>
          <li className='float-left'>
            <button>Projects</button>
          </li>
          <li className='float-left'>
            <button>Socials</button>
          </li>
        </ul>
      </nav>
      {/** HEADER */}
      <header
        style={{
          backgroundPosition: '0 -500px'
        }}
        className={`w-full h-[512px] rounded-3xl bg-cover bg-[url('/header.jpeg')] flex flex-col p-12 items-center justify-center bg-no-repeat`}>
        <h1 className='text-xl text-neutral-100 self-start ml-[50px]'>Full Stack</h1>
        <h1 className='text-8xl text-neutral-100 font-bold'>Software Engineer</h1>
        <button className='w-fit py-2 px-6 bg-neutral-100 rounded text-xs my-6 hover:opacity-75 transition-opacity'>
          View more
        </button>
      </header>
      {/** ABOUT */}
      <About />
      {/** PROJECTS */}
    </main>
  );
}
