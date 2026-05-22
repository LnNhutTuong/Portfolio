import { PERSONAL_INFO } from "../data";
import { Icons } from "../components/Icon";
const Hero = () => {
  const currentInfo = PERSONAL_INFO;
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 md:py-16 text-center flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-slate-900">
          <span className="hover:scale-105 text-zinc-600">
            Xin chào, tôi là
          </span>
          <br />
          <span className="text-stone-900">
            {currentInfo.name.split(" ")[2] +
              " " +
              currentInfo.name.split(" ")[3]}
          </span>
        </h1>
        <p className="text-lg sm:text-xl font-semibold text-slate-700 max-w-2xl mx-auto lg:mx-0">
          {currentInfo.title}
        </p>

        <p className="text-base max-w-xl mx-auto lg:mx-0 leading-relaxed text-stone-650">
          {currentInfo.aboutShort}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-center 
            border transition-all duration-200 border-slate-800 bg-stone-900 hover:bg-stone-800 text-white hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>

        <div className="flex justify-center lg:justify-start items-center space-x-4 pt-6 text-stone-800">
          <a
            href={currentInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
            title="GitHub"
          >
            <Icons.Github />
          </a>
          <a
            href={currentInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
            title="LinkedIn"
          >
            <Icons.LinkedIn />
          </a>
          <a
            href={currentInfo.facebook}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
            title="GitHub"
          >
            <Icons.Facebook />
          </a>
          <a
            href={currentInfo.ins}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
            title="GitHub"
          >
            <Icons.Instagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
