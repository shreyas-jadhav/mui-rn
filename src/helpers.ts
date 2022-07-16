import tw from "twrnc";

const DefaultSpacingProps = {
  py: 0,
  px: 0,
  my: 0,
  mx: 0,
  m: 0,
  p: 0,
  pl: 0,
  pr: 0,
  pb: 0,
  pt: 0,
  ml: 0,
  mr: 0,
  mt: 0,
  mb: 0,
};
export type SpacingProps = Partial<typeof DefaultSpacingProps>;

export const SpacingPropsToStyle = (props: Record<string, any>) =>
  tw.style(
    `${Object.keys(props)
      .filter((k) => Object.keys(DefaultSpacingProps).includes(k))
      .map((k) => `${k}-${props[k as keyof SpacingProps]}`)
      .join(` `)}`
  );

type FlexStylingProps = Partial<{
  justifyContent: "left" | "center" | "end" | "space-between";
  alignItems: "top" | "center" | "bottom";
}>;
const DefaultFlexStylingProps: FlexStylingProps = {
  justifyContent: "left",
  alignItems: "top",
};

export const FlexStylingPropsToStyle = (props: Record<string, any>) => {
  const keys = Object.keys(props).filter((k) =>
    Object.keys(DefaultFlexStylingProps).includes(k)
  ) as (keyof FlexStylingProps)[];
  let twString = "";
  keys.forEach((k) => {
    if (k == "justifyContent") {
      if (props[k] == "space-between") props[k] = "between";
      twString += `justify-${props[k]}`;
    }
    if (k == "alignItems") twString += ` items-${props[k]}`;
  });
  return tw.style(twString);
};

export const StylingPropsToStyle = (props: Record<string, any>) => ({
  ...SpacingPropsToStyle(props),
  ...FlexStylingPropsToStyle(props),
});
export type StylingProps = FlexStylingProps & SpacingProps;
