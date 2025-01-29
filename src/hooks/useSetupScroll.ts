import { MutableRefObject } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { useAppDispatch } from "src/app/store";
import { setPageScroll } from "src/features/layoutSlice";

export const useSetupScroll = (
  scrollRef: MutableRefObject<HTMLElement | null>
) => {
  const { scrollY } = useScroll({
    container: scrollRef,
  });

  const dispatch = useAppDispatch();

  useMotionValueEvent(scrollY, "change", (latest) =>
    dispatch(setPageScroll(latest))
  );
};
