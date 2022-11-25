import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
      <Image 
        alt="imagen_logo" 
        width={300} 
        height={100} 
        src="/assets/img/logo.svg"
      />
    </aside>
  )
}