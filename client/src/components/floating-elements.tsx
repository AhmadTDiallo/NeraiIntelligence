import { motion } from "framer-motion";

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large animated background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/20 rounded-full mix-blend-multiply filter blur-2xl"
        animate={{
          y: [-30, 40, -30],
          x: [-20, 20, -20],
          scale: [1, 1.3, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-60 right-20 w-[32rem] h-[32rem] bg-gradient-to-r from-cyan-400/25 to-blue-500/15 rounded-full mix-blend-multiply filter blur-3xl"
        animate={{
          y: [40, -40, 40],
          x: [20, -20, 20],
          scale: [1.2, 0.8, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/20 to-teal-500/15 rounded-full mix-blend-multiply filter blur-2xl"
        animate={{
          y: [20, -50, 20],
          x: [-25, 25, -25],
          scale: [1, 1.4, 1],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6,
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/4 w-72 h-72 bg-gradient-to-r from-orange-400/15 to-red-500/10 rounded-full mix-blend-multiply filter blur-2xl"
        animate={{
          y: [-25, 35, -25],
          x: [15, -15, 15],
          scale: [0.9, 1.1, 0.9],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-8 h-8 bg-white/40 rounded-full"
        animate={{
          y: [-15, 20, -15],
          x: [-8, 8, -8],
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-3/4 right-1/2 w-6 h-6 bg-purple-400/50 rounded-full"
        animate={{
          y: [20, -25, 20],
          x: [10, -10, 10],
          opacity: [0.3, 0.9, 0.3],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-3/4 w-5 h-5 bg-cyan-400/60 rounded-full"
        animate={{
          y: [-18, 25, -18],
          x: [-6, 6, -6],
          opacity: [0.5, 1, 0.5],
          scale: [0.8, 1.3, 0.8],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Additional small particles */}
      <motion.div
        className="absolute top-1/6 right-1/6 w-3 h-3 bg-pink-300/40 rounded-full"
        animate={{
          y: [-12, 15, -12],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-1/6 left-1/6 w-4 h-4 bg-emerald-300/35 rounded-full"
        animate={{
          y: [10, -20, 10],
          x: [5, -5, 5],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      />

      {/* Moving lines/streaks */}
      <motion.div
        className="absolute top-1/2 left-0 w-1 h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        animate={{
          x: [0, window.innerWidth || 1200],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />

      <motion.div
        className="absolute top-1/4 left-0 w-1 h-24 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent"
        animate={{
          x: [0, window.innerWidth || 1200],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
          delay: 7,
        }}
      />
    </div>
  );
}
