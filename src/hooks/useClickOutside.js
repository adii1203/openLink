import { useEffect, useRef } from "react";

export const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    let event = document.addEventListener("mousedown", (e) => {
      if (!domNode.current?.contains(e.target)) {
        handler();
      }
    });

    return () => document.removeEventListener("mousedown", event);
  });
  return domNode;
};
