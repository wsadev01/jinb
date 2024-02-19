const TAG_SIZES = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
}
const tagSize = (tag) => TAG_SIZES[tag] ? TAG_SIZES[tag] : "text-base";



md.use((md, options) => {
  // Override the renderer for the 'paragraph_open' token
  md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
    // Add your custom classes here
    return '<p class="font-serif">';
  };

  // Override the renderer for the 'paragraph_close' token
  md.renderer.rules.paragraph_close = (tokens, idx, options, env, self) => {
    return '</p>';
  };
});

md.renderer.rules.heading_open = addFontClassToHeadings;
