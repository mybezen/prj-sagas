import { motion } from "framer-motion";

type props = {
  children: React.ReactNode;
};

export default function Slide({ children }: props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateX: 90 },
        visible: { opacity: 1, translateX: 0 },
      }}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
}