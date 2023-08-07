import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
}

function Page({ children, id }: Props) {
  return (
    <motion.div
      key={id}
      animate={{
        opacity: [0, 1],
        transition: { opacity: { delay: 0.5, duration: 0.5 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export default Page;
