import { useTranslation } from "react-i18next";

function Timeline({ items }) {
  return (
    <div className="relative space-y-8 border-l border-purple-500/40 pl-6">
      {items.map((item) => (
        <article key={`${item.title}-${item.period}`} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-purple-400" />
          <p className="text-sm font-medium text-purple-300">{item.period}</p>
          <h3 className="mt-1 text-xl font-bold text-white">{item.title}</h3>
          <p className="text-gray-300">{item.organization}</p>
          {item.description && <p className="mt-3 leading-relaxed text-gray-400">{item.description}</p>}
          {item.details && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-400">
              {item.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

export default function ProfileSections() {
  const { t } = useTranslation();
  const education = t("education.items", { returnObjects: true });
  const experience = t("experience.items", { returnObjects: true });
  const skillGroups = t("skills.groups", { returnObjects: true });

  return (
    <div className="space-y-24 px-6 py-24 text-white md:px-10 lg:px-20">
      <section id="experience" className="mx-auto max-w-5xl scroll-mt-24">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">{t("experience.title")}</h2>
        <Timeline items={experience} />
      </section>
      <section id="education" className="mx-auto max-w-5xl scroll-mt-24">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">{t("education.title")}</h2>
        <Timeline items={education} />
      </section>
      <section id="skills" className="mx-auto max-w-5xl scroll-mt-24">
        <h2 className="mb-10 text-3xl font-bold md:text-5xl">{t("skills.title")}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(skillGroups).map(([group, skills]) => (
            <article key={group} className="rounded-2xl border border-gray-700 bg-gray-950/60 p-6">
              <h3 className="mb-4 text-xl font-bold text-purple-300">{t(`skills.labels.${group}`)}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => <span key={skill} className="rounded-full border border-gray-700 px-3 py-1 text-sm text-gray-300">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
