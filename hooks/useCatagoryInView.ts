import { Catagories } from "@/@types/types";
import { useActiveCatagoryContext } from "@/context/activeCatagoryContext";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// set the active catagory in the SubNav component using react-intersection-observer
export const useCatagoryInView = (catagory: Catagories, threshold = 0.75) => {
  const { ref, inView } = useInView({
    threshold,
  });
  const { activeCatagory, setActiveCatagory } = useActiveCatagoryContext();

  useEffect(() => {
    if (inView) {
      setActiveCatagory(catagory);
    }
  }, [inView, setActiveCatagory, catagory]);

  return { ref, activeCatagory };
};
