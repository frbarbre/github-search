"use client";

import { useStore } from "../store";
import { motion as m } from "framer-motion";

export default function Search(props) {
  const darkMode = useStore((store) => store.darkMode);

  return (
    <m.div
      initial={{ originX: 0, scaleX: 0 }}
      animate={{ originX: 0, scaleX: 1 }}
      transition={{ delay: 0.4 }}
      className={`${darkMode ? "bg-dim-blue" : "bg-light"} rounded-2xl shadow-3xl`}
    >
      <m.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        onSubmit={props.handleSubmit}
        className={`flex p-2 mb-4`}
      >
        <img src="/search.svg" alt="search-icon" className="py-2 pl-2 pr-3" />
        <input
          type="text"
          value={props.searchValue}
          placeholder="Search GitHub username..."
          onChange={(e) => props.setSearchValue(e.target.value)}
          ref={props.currentUserValue}
          className={`${
            darkMode ? "bg-dim-blue" : "bg-light"
          } w-full text-[14px] outline-none pr-2`}
        />
        <button
          type="submit"
          className="text-light rounded-lg bg-blue hover:bg-[#65ABFF] transition-all py-[14px] px-5 text-[14px] font-bold"
        >
          Search
        </button>
      </m.form>
    </m.div>
  );
}
