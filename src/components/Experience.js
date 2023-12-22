function Experience() {
  return (
    <div className="flex flex-col items-center w-screen bg-black">
      <div className="flex flex-col justify-end max-w-[2560px] w-full flex flex-col px-7">
        <div className="text-white text-4xl lg:text-6xl font-bold pt-20 pb-7">[ EXPERIENCE ]</div>
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-7 text-white">

          <div className="transition ease-out duration-300 hover:-translate-y-1 bg-cover bg-[url('/public/backgrounds/autodeskOffice.png')] col-span-6 rounded-2xl aspect-[750/490] flex flex-col justify-end overflow-hidden">
            <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10 text-md xl:text-lg font-bold">
              <div className="flex flex-col">
                <div>SOFTWARE ENGINEERING INTERN</div>
                <div className="flex sm:hidden opacity-40 items-end">JUN 2023 - SEP 2023</div>
                <div className="opacity-40">AUTODESK</div>
              </div>
              <div className="grow"></div>
              <div className="hidden sm:flex opacity-40 items-end">JUN 2023 - SEP 2023</div>
            </div>
          </div>

          <div className="transition ease-out duration-300 hover:-translate-y-1 bg-cover bg-[url('/public/backgrounds/office3.png')] col-span-6 rounded-2xl aspect-[750/490] flex flex-col justify-end overflow-hidden">
            <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10 text-md xl:text-lg font-bold">
              <div className="flex flex-col">
                <div>LEAD DEVELOPER</div>
                <div className="flex sm:hidden opacity-40 items-end">APR 2021 - JAN 2023</div>
                <div className="opacity-40">POPSTAND</div>
              </div>
              <div className="grow"></div>
              <div className="hidden sm:flex opacity-40 items-end">APR 2021 - JAN 2023</div>
            </div>
          </div>

          <div className="transition ease-out duration-300 hover:-translate-y-1 bg-cover bg-[url('/public/backgrounds/office2.png')] col-span-6 rounded-2xl aspect-[750/490] flex flex-col justify-end overflow-hidden">
            <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10 text-md xl:text-lg font-bold">
              <div className="flex flex-col">
                <div>SOFTWARE ENGINEERING INTERN</div>
                <div className="flex sm:hidden opacity-40 items-end">JUL 2020 - MAR 2021</div>
                <div className="opacity-40">POPSTAND</div>
              </div>
              <div className="grow"></div>
              <div className="hidden sm:flex opacity-40 items-end">JUL 2020 - MAR 2021</div>
            </div>
          </div>

          <div className="transition ease-out duration-300 hover:-translate-y-1 bg-cover bg-right bg-[url('/public/backgrounds/office.png')] col-span-6 rounded-2xl aspect-[750/490] flex flex-col justify-end overflow-hidden">
            <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10 text-md xl:text-lg font-bold">
              <div className="flex flex-col">
                <div>ROBOTIC ENGINEERING INTERN</div>
                <div className="flex sm:hidden opacity-40 items-end">APR 2021 - JAN 2023</div>
                <div className="opacity-40">ROBOLINK</div>
              </div>
              <div className="grow"></div>
              <div className="hidden sm:flex opacity-40 items-end">NOV 2019 - MAY 2021</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
