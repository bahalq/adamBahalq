import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

export default function Contact() {
  const { t } = useTranslation();
  const MotionSection = motion.section;
  return (
    <>
      <MotionSection
        id="contact"
        initial={{ opacity: 0, y: 56 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="scroll-mt-24 px-6 py-24 text-white sm:mx-5 sm:border sm:border-white md:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-5xl">{t("contact.title")}</h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-gray-400">{t("contact.description")}</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <a className="rounded-xl border border-gray-700 p-5 transition hover:border-purple-400" href="mailto:adambahalq.me@gmail.com"><span className="block text-sm text-gray-500">{t("contact.emailLabel")}</span><span className="mt-1 block text-gray-200">adambahalq.me@gmail.com</span></a>
            <a className="rounded-xl border border-gray-700 p-5 transition hover:border-purple-400" href="https://linkedin.com/in/bahalq-adam" target="_blank" rel="noreferrer"><span className="block text-sm text-gray-500">LinkedIn</span><span className="mt-1 block text-gray-200">bahalq-adam</span></a>
            <a className="rounded-xl border border-gray-700 p-5 transition hover:border-purple-400" href="https://github.com/bahalq" target="_blank" rel="noreferrer"><span className="block text-sm text-gray-500">GitHub</span><span className="mt-1 block text-gray-200">bahalq</span></a>
            <div className="rounded-xl border border-gray-700 p-5"><span className="block text-sm text-gray-500">{t("contact.cityLabel")}</span><span className="mt-1 block text-gray-200">{t("contact.city")}</span></div>
          </div>
        </div>
      </MotionSection>
      <footer className="border-t border-gray-800 px-6 py-8 text-center text-sm text-gray-500">
        <p>{t("footer.copyright")}</p>
        <div className="mt-3 flex justify-center gap-5"><a href="mailto:adambahalq.me@gmail.com" className="hover:text-white">{t("contact.emailLabel")}</a><a href="https://linkedin.com/in/bahalq-adam" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a><a href="https://github.com/bahalq" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></div>
      </footer>
    </>
  );
}
