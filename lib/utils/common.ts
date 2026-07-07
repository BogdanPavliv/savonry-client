export const getWindowWidth = () => {
  const { innerWidth: windowWidth } =
    typeof window !== "undefined" ? window : { innerWidth: 0 };

  return { windowWidth };
};

export const checkOffsetParam = (offset?: string | string[] | null) =>
  offset != null && !isNaN(+offset) && +offset >= 0;
