import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t, i18n } = useTranslation();
  const projects = t("projects.items", { returnObjects: true });
  const isRtl = i18n.dir(i18n.language) === "rtl";

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(min-width: 768px)").matches;
  });
  const containerRef = useRef(null);
  const MotionDiv = motion.div;
  const MotionArticle = motion.article;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsDesktop = (event) => setIsDesktop(event.matches);

    mediaQuery.addEventListener("change", updateIsDesktop);
    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${isRtl ? "" : "-"}${(projects.length - 1) * 55}%`],
  );

  return (
    <section
      ref={containerRef}
      id="projects"
      className="text-white px-4 md:px-0 md:mx-10 h-auto md:h-[300vh]"
    >
      <div className="md:sticky md:top-24 overflow-x-hidden">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-center md:text-left">
        {t("projects.title")}
      </h2>
        <MotionDiv
          style={{ x: isDesktop ? x : 0 }}
          className="flex flex-col md:flex-row gap-5 md:gap-6"
        >
          {projects.map((project) => (
            <MotionArticle
              key={project.id}
              className="relative flex flex-col md:flex-row gap-4 border border-gray-700 p-4 md:p-5 w-full md:w-3xl"
              style={{ flexShrink: 0 }}
            >
              <p className="text-xs md:text-sm self-end md:absolute md:top-3 md:right-3">
                {project.year}
              </p>

              <div className="flex flex-col w-full md:w-auto justify-around items-center gap-3">
                <img
                  src={project.image}
                  alt={project.name}
                  className="border-gray-700 border rounded-lg w-full md:w-80 max-w-full h-auto object-cover"
                />

                <div className="flex flex-wrap gap-2.5 justify-center md:justify-start w-full">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-gray-50 font-bold hover:bg-gray-300 hover:scale-95 rounded-full px-3 py-2 items-center gap-1 flex w-fit text-gray-950"
                    >
                      <FaGithub />
                      {t("projects.github")}
                    </a>
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

              <div className="flex flex-col gap-2 min-w-0">
                <h3 className="font-bold uppercase bg-linear-to-r from-blue-700 via-green-700 to-yellow-900 bg-clip-text text-transparent text-lg md:text-xl">
                  {project.name}
                </h3>

                <p className="font-semibold text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 text-sm">
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
    </section>
  );
}
