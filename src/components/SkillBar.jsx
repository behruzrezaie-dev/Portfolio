import React from "react";
import { motion } from "framer-motion";
const SkillBar = ({ title, percent, delay }) => {
  return (
    <div className="w-full mb-6">
      <div //Top
        className="flex justify-between mb-2"
      >
        <span className="font-medium text-[#22242d] dark:text-white">
          {title}
        </span>
        <span className="text-sm text-[#22242d] dark:text-white">
          {percent}%
        </span>
      </div>

      <div // Bar
        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-[#22242d] dark:bg-orange-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
