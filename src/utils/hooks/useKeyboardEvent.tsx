// use keyboard event hook
import { useEffect } from "react";

export default function useKeyboardEvent(
  key: string,
  callback: (event: KeyboardEvent) => void
) {
  useEffect(() => {
    function handle(event: KeyboardEvent) {
      if (event.key === key) {
        callback(event);
      }
    }

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [key, callback]);
}
