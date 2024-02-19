export const TAG_SIZES = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
}
export const tagSize = (tag) => TAG_SIZES[tag] ? TAG_SIZES[tag] : "text-base";
