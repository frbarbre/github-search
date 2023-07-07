"use client";

import { useState, useRef } from "react";
import { Octokit } from "@octokit/core";
import { Error, Profile, Search, Welcome, Loading } from ".";
import { useStore } from "../store";
import { shallow } from "zustand/shallow";
import { AnimatePresence, motion as m } from "framer-motion";

export default function MainPage() {
  const currentUserValue = useRef();
  const darkMode = useStore((store) => store.darkMode);

  const [searchValue, setSearchValue] = useState("");
  const [isLoaded, setIsLoaded] = useStore(
    (state) => [state.isLoaded, state.setIsLoaded],
    shallow
  );
  const [loading, setLoading] = useState(false);
  const [data, setData] = useStore(
    (state) => [state.data, state.setData],
    shallow
  );

  const errorCheck = Object.values(data).includes("not found");
  const welcomeCheck = Object.values(data).includes("welcome");

  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
  });

  function dataRequest() {
    octokit
      .request(`GET /users/${currentUserValue.current.value}`)
      .then((response) => {
        setData(response);
        setLoading(false);
        setIsLoaded(true);
        console.log(data);
      })
      .catch((err) => {
        setData({ error: err, message: "not found" });
        setLoading(false);
        console.log(data);
        console.log(errorCheck);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentUserValue.current.value !== "") {
      setLoading(true);
      setIsLoaded(false);
      dataRequest();
    }
  }

  return (
    <main>
      <Search
        currentUserValue={currentUserValue}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />
      <AnimatePresence>
        {isLoaded && (
          <m.div
            initial={{ originY: 0, scaleY: 0 }}
            animate={{ originY: 0, scaleY: 1 }}
            exit={{ originY: 0, scaleY: 0 }}
            transition={{ delay: 0.5 }}
            className={`${
              darkMode ? "bg-dim-blue" : ""
            } rounded-2xl shadow-4xl p-6 md:p-10 lg:p-12`}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Profile data={data.data} />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {errorCheck && loading === false && (
          <m.div
            initial={{ originY: 0, scaleY: 0 }}
            animate={{ originY: 0, scaleY: 1 }}
            exit={{ originY: 0, scaleY: 0 }}
            transition={{ delay: 0.5 }}
            className={`${
              darkMode ? "bg-dim-blue" : ""
            } rounded-2xl shadow-4xl p-6 md:p-10 lg:p-12`}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Error data={data} />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {welcomeCheck && loading === false && (
          <m.div
            initial={{ originY: 0, scaleY: 0 }}
            animate={{ originY: 0, scaleY: 1 }}
            exit={{ originY: 0, scaleY: 0 }}
            transition={{ delay: 0.5 }}
            className={`${
              darkMode ? "bg-dim-blue" : ""
            } rounded-2xl shadow-4xl p-6 md:p-10 lg:p-12`}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Welcome />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {loading && (
          <m.div
            initial={{ originY: 0, scaleY: 0 }}
            animate={{ originY: 0, scaleY: 1 }}
            exit={{ originY: 0, scaleY: 0 }}
            transition={{ delay: 0.5 }}
            className={`${
              darkMode ? "bg-dim-blue" : ""
            } rounded-2xl shadow-4xl p-6 md:p-10 lg:p-12`}
          >
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Loading />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </main>
  );
}
