import React, { useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame } from "@react-three/fiber";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

function InfoModel() {
  const infosRef = useRef();
  const infos = useLoader(GLTFLoader, "/highpoly_info_sign_3d_icon.glb");
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

function MagneticButton({ label }) {
  const MotionA = motion.a;
  const ref = useRef();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 250, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 250, damping: 20 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mx = e.clientX - (left + width / 2);
    const my = e.clientY - (top + height / 2);

    x.set(mx * 0.2);
    y.set(my * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <MotionA
      href="/Adam_Bahalq.docx"
      download
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: smoothX, y: smoothY }}
      className="px-8 py-3 cursor-pointer bg-linear-to-r box-border from-purple-500 to-pink-500 rounded-full transition duration-200"
    >
      {label}
    </MotionA>
  );
}

export default function About() {
  const MotionDiv = motion.div;
  const MotionP = motion.p;
  const { t } = useTranslation();

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

        <div className="relative w-fit h-fit box-border py-3 ">
          <MagneticButton label={t("about.downloadCv")} />
          <MotionDiv
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            drag="y"
            dragConstraints={{ top: -40, bottom: 40 }}
            className="absolute z-10 w-full h-full top-0 left-0 bg-neutral-900 flex
  items-center justify-center border rounded-full cursor-grab"
          >
            {t("about.moveMe")}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
