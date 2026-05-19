import { PROJECTS } from "../data";
import { Icons } from "../components/Icon";
const currentProjects = PROJECTS;

const Project = () => {
  return (
    <section
      id="projects"
      className="mt-4 py-20 border-t bg-slate-950/60 border-slate-900 text-slate-100"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight">Dự Án</h2>
          <div className="h-1 w-12 bg-indigo-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 bg-slate-900/40 border-slate-800 hover:border-slate-700"
            >
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm line-clamp-2 text-slate-400 leading-relaxed">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags &&
                    project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded font-medium bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                </div>

                {/* Chân thẻ chứa các nút hành động */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/30">
                  <button className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 flex items-center space-x-1">
                    <span>Xem chi tiết</span>
                    <span>→</span>
                  </button>

                  {/* Đường link mã nguồn & Demo */}
                  <div className="flex items-center space-x-3 text-slate-400">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-400 transition-colors"
                      title="Mã nguồn GitHub"
                    >
                      <Icons.Github />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-indigo-400 transition-colors"
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
