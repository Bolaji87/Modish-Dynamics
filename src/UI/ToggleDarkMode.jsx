import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";
import Button from "./Button";

function ToggleDarkMode() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button onclick={toggleDarkMode} className="block p-2 text-2xl">
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineSun className="dark:text- font-bold text-indigo-600 dark:text-gray-50" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <HiOutlineMoon className="font-bold text-indigo-600 dark:text-gray-50" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}

export default ToggleDarkMode;
