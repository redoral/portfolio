import Image from 'next/image';

function LoadingScreen() {
  return (
    <div className='w-screen h-screen overflow-hidden items-center justify-center flex'>
      <Image src='/img/spinner.gif' alt='Ghost loading indicator' width={48} height={48} />
    </div>
  );
}

export default LoadingScreen;
