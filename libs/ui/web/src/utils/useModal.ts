import {
  DetailedHTMLProps,
  HTMLAttributes,
  Key,
  MutableRefObject,
  useEffect,
  useReducer,
} from "react";
import { useClickOutside } from "./useClickOutside";

export interface ModalConfig
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  visible: boolean;
  width?: Key;
  height?: ("fit-to-screen" | "fit-to-content") | Key;
  positionX?: "left" | "center" | "right";
  positionY?: "top" | "center" | "bottom";
  overlay?: boolean;
  closeButton?: boolean;
  entranceAnimation?: string;
  exitAnimation?: string;
  animationDuration?: Key;
  onShow?: () => void;
  onDismiss?: () => void;
  showCloseButtonAfter?: number;
  automaticallyCloseAfter?: number;
  preventClosingOnOverlay?: boolean;
  preventClosingOnEscKey?: boolean;
  disablePageScrolling?: boolean;
  avoidMultiplePopups?: boolean;
}

export type ModalAction =
  | { type: "OPEN" | "CLOSE" | "TOGGLE" }
  | { type: "SET"; value: boolean };

export function useModal<T extends HTMLElement = HTMLElement>(
  config: ModalConfig,
  ref: MutableRefObject<T | null>
): boolean {
  const [visible, dispatch] = useReducer(
    (state: boolean, action: ModalAction) => {
      switch (action.type) {
        case "OPEN":
          if (config.onShow) {
            config.onShow();
          }

          return true;

        case "CLOSE":
          if (config.onDismiss) {
            config.onDismiss();
          }

          return false;

        case "TOGGLE":
          if (!state && config.onShow) {
            config.onShow();
          }

          if (state && config.onDismiss) {
            config.onDismiss();
          }

          return !state;

        case "SET":
          if (state === action.value) {
            return state;
          }

          if (action.value && config.onShow) {
            config.onShow();
          }

          if (!action.value && config.onDismiss) {
            config.onDismiss();
          }

          return action.value;

        default:
          return state;
      }
    },
    config.visible
  );

  useEffect(() => {
    dispatch({ type: "SET", value: config.visible });
  }, [config.visible]);

  useClickOutside(() => {
    console.log("clicked outside");

    if (dispatch) {
      dispatch({ type: "CLOSE" });
    }
  }, ref);

  return visible;
}
