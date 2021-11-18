export function FluidType(
  amount: number,
  minFont: number,
  maxFont: number,
  unit = "vw",
  prop = "font-size",
  minBreak: number,
  maxBreak: number
) {
  const maxBreakpoint = maxBreak;
  const dimension = unit === "vw" ? "width" : "height";

  return `
    ${
      maxFont
        ? `
          @media (min-${dimension}: ${maxBreakpoint}px) {
            ${prop}: ${maxFont}px;
        }
        `
        : ""
    }

    ${prop}: ${minFont}px;
  `;
}
