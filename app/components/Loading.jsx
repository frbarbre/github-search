"use client";

import { motion as m } from "framer-motion";
import { nanoid } from "nanoid";

const dots = [".", ".", ".", "."];

export default function Loading() {
  return (
    <div>
      <h1>
        Loading
        {dots.map((dot, index) => (
          <m.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            key={nanoid()}
          >
            {dot}
          </m.span>
        ))}
      </h1>
    </div>
  );
}
