import Link from "next/link"

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(/meal2.jpg)`}} className="h-screen bg-cover bg-no-repeat sm:bg-center">
      <div className="flex h-full flex-col items-center justify-center p-1">
        <h1 className="text-3xl text-white font-rubik [text-shadow:0_0_10px_#475569]">Welcome to racip</h1>
        <Link href={'/racips'} className="dom bg-slate-100 relative shadow-glow text-slate-600 rounded-md overflow-hidden hover:text-slate-50 flex items-center justify-center">
          <span className="p-1 font-roboto flex items-center gap-1 font-semibold">Continue <i className='bx bxs-right-arrow'></i></span>
        </Link>
      </div>
    </div>
  );
}
