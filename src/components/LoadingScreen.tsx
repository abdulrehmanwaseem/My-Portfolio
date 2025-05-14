import { motion } from "framer-motion";
import { Code } from "lucide-react";

interface LoadingScreenProps {
  progress: number;
}

const LoadingScreen = ({ progress }: LoadingScreenProps) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-full bg-background">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Code className="w-16 h-16 text-primary animate-pulse" />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-6 text-xl font-bold md:text-2xl text-text-primary"
      >
        Building Experience...
      </motion.h1>

      <div className="w-64 h-2 overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
          className="h-full rounded-full bg-primary"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-4 text-sm text-text-secondary"
      >
        {progress}% Complete
      </motion.p>
    </div>
  );
};

export default LoadingScreen;
