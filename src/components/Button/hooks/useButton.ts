export function useButton() {
  const getAnimation = (isDisabled?: boolean) => {
    if (isDisabled) return ' opacity-70 ';
    return ' hover:opacity-70 duration-200 active:opacity-90 ';
  };

  return { getAnimation };
}
