import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (<section
        id="home"
        className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>
        <div className="text-center z-10 px-4 w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent leading-tight">Hi, I'm Zakaria Ali</h1>

            <p className="text-gray-400 text-base sm:text-lg mb-8 max-w-lg mx-auto">
                an aspiring Software Engineer looking to develop my frontend and backend skills.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <a href="#projects" className="bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition relative overflow-hidden 
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>

                <a href="#contact" className="border border-red-600/50 text-red-600 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Contact Me</a>
                    
                <a href="https://github.com/zed-a18" target="_blank" className="border border-red-600/50 text-red-600 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">Github</a>
                    
                <a href="https://www.linkedin.com/in/zakaria-ali-265340101/" target="_blank" className="border border-red-600/50 text-red-600 py-2 px-4 sm:py-3 sm:px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">LinkedIn</a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};