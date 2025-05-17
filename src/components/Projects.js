function Projects() {
    return (
        <div className="flex flex-col items-center w-screen bg-black">
            <div className="flex flex-col justify-end max-w-[1200px] w-full flex flex-col px-7">
                <div className="text-white text-4xl lg:text-5xl font-bold pt-20 pb-7">
                    [ PROJECTS ]
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 text-white">
                    <div className="bg-neutral-900 aspect-square lg:aspect-auto col-span-4 lg:col-span-8 rounded-2xl flex justify-center items-center">
                        <div className="font-white text-2xl md:text-3xl lg:text-4xl p-20">
                            Here's some of my recent projects. I'm always
                            shipping new code, so check back in for exciting
                            updates!
                        </div>
                    </div>

                    <a
                        href="https://henrysbarbershop.web.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="lg:order-first transition ease-out duration-300 hover:-translate-y-1 overflow-hidden bg-bottom bg-cover bg-[url('/public/mockups/hb.png')] col-span-4 aspect-square rounded-2xl flex flex-col justify-end"
                    >
                        <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10">
                            <div className="font-bold text-lg">
                                HENRY'S BARBERSHOP
                            </div>
                            <div className="grow"></div>
                            <div className="font-bold text-lg opacity-40">
                                001
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.syndrai.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition ease-out duration-300 hover:-translate-y-1 overflow-hidden bg-bottom bg-cover bg-[url('/public/mockups/syndr.png')] col-span-4 aspect-square rounded-2xl flex flex-col justify-end"
                    >
                        <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10">
                            <div className="font-bold text-lg">SYNDR AI</div>
                            <div className="grow"></div>
                            <div className="font-bold text-lg opacity-40">
                                002
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://www.ucsdthetatau.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition ease-out duration-300 hover:-translate-y-1 overflow-hidden bg-bottom bg-cover bg-[url('/public/mockups/tt.png')] col-span-4 aspect-square rounded-2xl flex flex-col justify-end"
                    >
                        <div className="flex flex-row p-4 bg-gradient-to-t from-neutral-800 pt-10">
                            <div className="font-bold text-lg">
                                THETA TAU WEBSITE
                            </div>
                            <div className="grow"></div>
                            <div className="font-bold text-lg opacity-40">
                                003
                            </div>
                        </div>
                    </a>

                    <a
                        href="https://explorer.solana.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition ease-out duration-300 hover:-translate-y-1 bg-neutral-900 col-span-4 aspect-square rounded-2xl flex flex-col justify-end"
                    >
                        <div className="grow"></div>
                        <div className="p-4 text-center font-bold text-2xl opacity-10 -mb-10">
                            [ IN PROGRESS ]
                        </div>
                        <div className="grow"></div>
                        <div className="flex flex-row p-4">
                            <div className="font-bold text-lg">
                                SOLANA WALLET TRACKER
                            </div>
                            <div className="grow"></div>
                            <div className="font-bold text-lg opacity-40">
                                004
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;
