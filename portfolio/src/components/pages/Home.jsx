import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative">

            <RevealOnScroll>
                <div className="text-center z-10 px-4 w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-pink-600 bg-clip-text text-transparent leading-tight">Zakaria Ali</h1>
                    
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 text-white/90">
                        Aspiring Full-Stack Developer & IT Specialist
                    </h2>

                    <div className="flex justify-center gap-4 mb-8">
                        <a href="https://github.com/zed-a18" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-white/80 hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/zakaria-ali-265340101/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-white/80 hover:text-red-500 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect x="2" y="9" width="4" height="12"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#projects" className="bg-red-800 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden 
                        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/20">View Projects</a>
                            
                        <a href="#contact" className="border border-red-600/50 text-red-600 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200
                        hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-600/10 hover:bg-red-600/10">Contact Me</a>
                    </div>
                </div>
            </RevealOnScroll>

        </section>
    );
};