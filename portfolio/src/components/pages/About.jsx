import { RevealOnScroll } from '../RevealOnScroll';

export const About = () => {

    const frontendSkills = ["JavaScript", "React", "Tailwindcss"];

    const backendSkills = ["Nodejs", "Python", "SQL"];

    return ( <section id="about" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent text-center">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <p className="text-gray-300 mb-6">
                    I have a tehcnical background of 2 years in IT support to deliver effective solutions and I am now looking to persue software development - to aquire skills to improve my expertise in building scalable web applications and create innovative solutions.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {frontendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-red-600/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}

                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {backendSkills.map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-red-800 text-gray-200 py-1 px-3 rounded-full text-sm hover:bg-red-600/20
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">{tech}

                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">Eduction</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong> Software Engineering & AI Bootcamp </strong> <br></br>IN4 Group <br></br>(Dec 2024 - March 2025)
                            </li>
                            <li>
                            <strong> Network Professional Programme </strong> <br></br>Just IT Training Ltd <br></br>(March 2022 - July 2022)
                        </li>
                  
                    </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">Contract - 1st Line Senior Desktop Support Analyst <br></br>HSBC Bank Headquarters, Canary Wharf London <br></br>(July 2023 - January 2024)</h4>
                            <p> - Carry out 1st line duties</p>
                        </div>

                        <div>
                            <h4 className="font-semibold">Contract - 1st Line Desktop Support Analyst <br></br>HSBC Bank Headquarters, Canary Wharf London <br></br>(November 2022 - June 2023)</h4>
                            <p> - Carry out 1st line duties</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};