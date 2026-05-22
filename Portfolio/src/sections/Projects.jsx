import { PROJECTS } from "../data";
import { Icons } from "../components/Icon";
const currentProjects = PROJECTS;

const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-[calc(100vh-4rem)] flex items-center scroll-mt-16 mt-4 py-20 border-t border-slate-200 relative overflow-hidden"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dự Án</h2>
          <div className="h-1 w-12 bg-black mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 bg-slate-50/50 border-slate-200 hover:border-indigo-200 hover:bg-slate-50 shadow-sm"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm line-clamp-2 text-slate-650 leading-relaxed">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags &&
                    project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded font-semibold bg-slate-100 text-slate-700 border border-slate-200/50"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                  <button className="text-sm font-bold text-stone-700 hover:text-stone-900 flex items-center space-x-1">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </button>
                  <div className="flex items-center space-x-3 text-slate-500">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-600 transition-colors"
                      title="Mã nguồn GitHub"
                    >
                      <Icons.Github />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-600 transition-colors"
                      title="Xem trực tiếp"
                    >
                      <Icons.ExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Project;
