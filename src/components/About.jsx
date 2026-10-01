import { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

function InfoModel() {
  const infosRef = useRef();
  const infos = useLoader(GLTFLoader, import.meta.env.BASE_URL + "highpoly_info_sign_3d_icon.glb");
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (infosRef.current) {
      infosRef.current.rotation.y += hovered ? delta * 2 : delta;
      infosRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <primitive
      ref={infosRef}
      object={infos.scene}
      scale={0.8}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export default function About() {
  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const { t } = useTranslation();
  const moveAreaRef = useRef(null);

  return (
    <div
      className="sm:min-h-screen flex flex-col lg:flex-row sm:border sm:m-5 items-center justify-center gap-20 px-6 lg:px-20 bg-linear-to-b from-black via-gray-950 to-black text-white relative overflow-hidden"
      id="about"
    >
      <div className="absolute w-125 h-125 bg-purple-600/20 blur-[120px] rounded-full top-1/3 left-1/4 -z-10"></div>

      <div className="aspect-square h-70 lg:h-112.5 sm:translate-y-0 translate-y-20 relative">
        <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full"></div>
        <Canvas>
          <ambientLight intensity={1.8} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <InfoModel />
        </Canvas>
      </div>

      <div className="max-w-xl space-y-8 flex flex-col xs:items-start items-center py-2 text-center lg:text-left">
        <MotionDiv
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-extrabold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          <h2 className="text-5xl font-bold">{t("about.title")}</h2>
        </MotionDiv>

        <MotionP
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 leading-relaxed text-lg"
        >
          {t("about.description")}
        </MotionP>

        <MotionDiv className="flex flex-wrap justify-center lg:justify-start gap-4">
          {["React", "Laravel", "Git", "MySQL"].map((skill, i) => (
            <span
              key={i}
              className="bg-gray-900 border border-gray-700 px-5 py-2 rounded-full text-sm hover:bg-purple-600 hover:border-purple-600 transition duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </MotionDiv>

        <div ref={moveAreaRef} className="relative h-24 w-64">
          <a
            href={import.meta.env.BASE_URL + "Adam_Bahalq_CV_2026.pdf"}
            download
            className="absolute left-1/2 top-1/2 flex h-12 w-48 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-linear-to-r from-purple-500 to-pink-500 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-200 hover:scale-105 hover:from-purple-400 hover:to-pink-400 hover:shadow-purple-400/30 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
          >
            {t("about.downloadCv")}
          </a>
          <MotionDiv
            drag
            dragConstraints={moveAreaRef}
            dragElastic={0.15}
            dragMomentum={false}
            whileDrag={{ scale: 1.04, cursor: "grabbing" }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-8 inset-y-6 z-10 flex cursor-grab touch-none select-none items-center justify-center rounded-full border border-gray-600 bg-neutral-900 px-5 text-sm text-gray-200 shadow-xl shadow-black/30"
          >
            {t("about.moveMe")}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
