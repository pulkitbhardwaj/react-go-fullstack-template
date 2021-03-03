import { RefObject, useEffect, useRef } from "react";

/**
 * Execute when the user clicks outside the HTML element
 *
 * @param callback The callback function to execute
 * @param ref The refernce object for the element
 */
export function useClickOutside<T extends HTMLElement>(
  callback: (e: MouseEvent) => void,
  ref: RefObject<T>
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    function listener(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node) && callbackRef.current) {
        callbackRef.current(e);
      }
    }

    document?.addEventListener("click", listener, true);

    return () => document?.removeEventListener("click", listener, true);
  }, [callbackRef, ref]);
}
