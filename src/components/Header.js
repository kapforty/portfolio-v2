function Header() {
  return (
    <div className="flex flex-col items-center w-screen bg-transparent fixed top-0 z-10 mix-blend-difference">
      <div className="max-w-[2560px] w-full flex flex-row text-xl sm:text-3xl font-bold p-7 text-white">
        {/* TODO: IMPLEMENT MENU */}
        {/* <div className="group flex flex-row space-x-1 h-10">
          <div>[</div>
          <div className="flex flex-col group-hover:-translate-y-7 sm:group-hover:-translate-y-8 transition duration-500 ease-in-out">
            <div className="group-hover:opacity-0 transition ease-out duration-500">MENU</div>
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-500">MENU</div>
          </div>
          <div>]</div>
        </div> */}
        <div className="sm:tracking-widest">✦✦✦</div>

        <div className="grow"></div>

        <a href="mailto:jordanangin@gmail.com" className="group flex flex-row space-x-1 h-10">
          <div>[</div>
          <div className="flex flex-col group-hover:-translate-y-7 sm:group-hover:-translate-y-8 transition duration-500 ease-in-out">
            <div className="group-hover:opacity-0 transition ease-out duration-500">LET'S TALK</div>
            <div className="opacity-0 group-hover:opacity-100 transition ease-in duration-500">LET'S TALK</div>
          </div>
          <div>]</div>
        </a>

      </div>
    </div>
  );
}

export default Header;
