import { RevealOnScroll } from '../RevealOnScroll';

export const Projects = () => {
    return ( <section id="projects" className="min-h-screen flex items-center justify-center py-20">

        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Restaurant Website</h3>
                    <p className="text-gray-300 mb-4">
                        Group project to build restaurant website using React. 
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["React", "Node.js", "Tailwindcss", "HTML, CSS", "JavaScript"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-red-600/10 text-red-600 py-1 px-3 rounded-full text-sm hover:bg-red-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">{tech}

                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/zed-a18/restaurant-app" target="_blank" className="text-red-500 hover:text-red-400 transition-colors my-4">View Project ➡</a>

                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:translate-y-1 hover:border-red-600/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl font-bold mb-2">Text Based Adventure Game</h3>
                    <p className="text-gray-300 mb-4">
                        Solo project to create a text based adventure game with Python.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["Python"].map((tech, key) => (
                            <span
                            key={key}
                            className="bg-red-600/10 text-red-600 py-1 px-3 rounded-full text-sm hover:bg-red-600/20
                                        hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">{tech}

                            </span>
                        ))}
                    </div>

                    <div className="flex justify-between items-center">
                        <a href="https://github.com/zed-a18/PROJECT_TBAG" target="_blank" className="text-red-500 hover:text-red-400 transition-colors my-4">View Project ➡</a>

                    </div>
                </div>
                
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};