import { motion } from "framer-motion";

type Props = {
  image: string;
  closeModal: () => void;
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export default function Modal({ image, closeModal }: Props) {
  return (
    <>
      <motion.div
        onClick={closeModal}
        className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <img
          className="max-w-screen max-h-screen"
          src={`/assets/${image}`}
          alt=""
        />
      </motion.div>
      <motion.div
        onClick={closeModal}
        className="fixed top-5 right-5 text-5xl w-10 h-10 cursor-pointer select-none"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        x
      </motion.div>
    </>
  );
}
