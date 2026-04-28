import React from "react";
import Bar from "./Bar";

const Skills = () => {
  return (
    <section className="w-full px-5 sm:px-10 lg:px-20 py-10">
      <h2 className=" text-center text-2xl font-bold mb-10 text-[#22242d] dark:text-white">
        Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Bar title="HTML" percent={95} delay={0} />
          <Bar title="CSS" percent={90} delay={0.2} />
          <Bar title="JavaScript" percent={80} delay={0.4} />
        </div>
        <div>
          <Bar title="React JS" percent={80} delay={0} />
          <Bar title="Tailwind" percent={90} delay={0.2} />
          <Bar title="Bootstrap" percent={90} delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
