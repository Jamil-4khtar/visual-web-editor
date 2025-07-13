import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const PageLoader = () => {
  return (
    <AnimatePresence>
      {
        <motion.div
          className="fixed inset-0 bg-transparent flex items-center justify-center z-50"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.span
                key={i}
                className="w-4 h-4 bg-white rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
          {/* Loader content goes here */}
        </motion.div>
      }
    </AnimatePresence>
  );
};

export default PageLoader;
