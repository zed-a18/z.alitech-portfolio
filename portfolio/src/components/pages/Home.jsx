import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (<section
        id="home"
        className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent leading-right">Hi, I'm Zakaria Ali</h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I am an aspiring Software Engineer looking to develop my frontend and backend skills.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-red-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden 
                hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>

                <a href="#contact" className="border border-red-600/50 text-red-600 py-3 px-6 rounded font-medium transition-all duration-200
                hover:translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Contact Me</a>

            </div>
        </div>
        </RevealOnScroll>
    </section>
    );
};