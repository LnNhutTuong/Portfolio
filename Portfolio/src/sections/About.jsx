import { PERSONAL_INFO, EXPERIENCES, SKILLS } from "../data";
const currentInfo = PERSONAL_INFO;
const currentExperiences = EXPERIENCES;
const currentSkills = SKILLS;

const About = () => {
  return (
    <section
      id="about"
      className="mt-4 py-20 border-t bg-slate-950/60 border-slate-900 text-slate-100"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Giới Thiệu Bản Thân
          </h2>
          <div className="h-1 w-12 bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white">"Đừng dừng lại"</h4>
              <p className="leading-relaxed text-slate-400 text-sm sm:text-base">
                {currentInfo.aboutLong}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl text-center border bg-slate-900/60 border-slate-800">
                <span className="block text-xl sm:text-2xl font-extrabold text-indigo-400">
                  2+
                </span>
                <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                  Năm Lập Trình
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">
                Kinh nghiệm chính
              </h4>
              <div className="space-y-6 relative border-l border-slate-800 pl-4 ml-2">
                {currentExperiences.map((exp, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[25px] top-1.5 w-3 h-3 rounded-full border-2 border-slate-950 bg-indigo-400" />
                    <span className="text-xs text-indigo-400 font-bold">
                      {exp.time}
                    </span>
                    <h5 className="font-bold text-base mt-0.5 text-slate-200">
                      {exp.role}
                    </h5>
                    <p className="text-xs text-slate-500 mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-400">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-white text-center">
              Kỹ năng chuyên môn
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {currentSkills.map((categoryObj, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border bg-slate-900/30 border-slate-800/80 hover:border-slate-700/80 hover:bg-slate-900/50 transition-all duration-300 flex flex-col space-y-4"
                >
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800/80 pb-2">
                    {categoryObj.category}
                  </h4>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {categoryObj.skills.map((subSkill) => (
                      <span
                        key={subSkill.id}
                        className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all duration-200"
                      >
                        {subSkill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
