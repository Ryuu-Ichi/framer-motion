import { useMediaContext } from "./useMedia";

export const useAnimations = (animations: any) => {
  const { width } = useMediaContext();

  if (Array.isArray(animations)) {
    const result: any = [];
    animations.map((animation) => {
      if (+width < 1556 && +width >= 1168 && animation[1168]) {
        result.push({ ...animation[1556], ...animation[1168] });
        return;
      } else if (+width < 1168 && +width >= 720 && animation[720]) {
        result.push({ ...animation[1556], ...animation[720] });
        return;
      } else if (+width < 720 && animation[320]) {
        result.push({ ...animation[1556], ...animation[320] });
        return;
      }

      result.push(animation[1556]);
    });

    return result;
  }

  if (+width < 1556 && +width >= 1168 && animations[1168])
    return { ...animations[1556], ...animations[1168] };
  else if (+width < 1168 && +width >= 720 && animations[720])
    return { ...animations[1556], ...animations[720] };
  else if (+width < 720 && animations[320])
    return { ...animations[1556], ...animations[320] };

  return animations[1556];
};
