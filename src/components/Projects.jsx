import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });
  const MotionDiv = motion.div;
  const MotionArticle = motion.article;
  const MotionSection = motion.section;

  return (
    <MotionSection
      id="projects"
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="projects-section mb-5 scroll-mt-24 px-4 py-20 text-white sm:border sm:border-white"
    >
      <h2 className="projects-title mb-6 text-center text-3xl font-bold md:mb-10 md:text-left md:text-5xl">
        {t("projects.title")}
      </h2>
      <div className="projects-scroll overflow-x-auto pb-6 snap-x snap-mandatory" aria-label={t("projects.title")}>
        <MotionDiv
          className="projects-track flex w-max flex-row gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <MotionArticle
              key={project.id}
              className="project-card relative flex w-[min(88vw,48rem)] shrink-0 snap-start flex-col gap-4 border border-gray-700 p-4 md:flex-row md:p-5"
            >
              <p className="project-year text-xs md:text-sm self-end md:absolute md:top-3 md:right-3">
                {project.year}
              </p>

              <div className="project-visual flex flex-col w-full md:w-auto justify-around items-center gap-3">
                <img
                  src={project.image}
                  alt={project.name}
                  className="project-image border-gray-700 border rounded-lg w-full md:w-80 max-w-full h-auto object-cover"
                />

                <div className="project-actions flex flex-wrap gap-2.5 justify-center md:justify-start w-full">
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-50 font-bold hover:bg-gray-300 hover:scale-95 rounded-full px-3 py-2 items-center gap-1 flex w-fit text-gray-950"
                    >
                      <FaGithub />
                      {t("projects.github")}
                    </a>
                  ) : (
                    <span className="rounded-full border border-dashed border-gray-600 px-3 py-2 text-sm text-gray-500">
                      {t("projects.codePending")}
                    </span>
                  )}

                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-700 font-semibold px-3 py-2 hover:bg-gray-300 hover:scale-95 rounded-full items-center gap-1 flex w-fit text-gray-50"
                    >
                      <MdOutlineLiveTv />
                      {t("projects.demoLive")}
                    </a>
                  )}
                </div>
              </div>

              <div className="project-content flex flex-col gap-2 min-w-0">
                <h3 className="project-name font-bold uppercase bg-linear-to-r from-blue-700 via-green-700 to-yellow-900 bg-clip-text text-transparent text-lg md:text-xl">
                  {project.name}
                </h3>

                <p className="project-status text-sm text-purple-300">{project.status}</p>

                <p className="project-description font-semibold text-sm md:text-base">
                  {project.description}
                </p>

                <ul className="project-features list-disc space-y-1 pl-5 text-sm text-gray-300">
                  {project.features.map((feature) => (
                    <li key={`${project.id}-${feature}`}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech flex flex-wrap gap-1.5 text-sm">
                  {project.techStack.map((tech) => (
                    <div
                      key={`${project.id}-${tech}`}
                      className="bg-gray-900 border border-gray-700 px-2 py-1 rounded-full text-xs md:text-sm hover:bg-purple-600 hover:border-purple-600 transition duration-300 cursor-default"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </MotionArticle>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
