import MarkdownIt from 'markdown-it';

export const md = new MarkdownIt();
export const TAG_SIZES = {
  h1: "text-4xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-xl",
  h5: "text-lg",
}
export const tagSize = (tag) => TAG_SIZES[tag] ? TAG_SIZES[tag] : "text-base";

export const addFontClassToHeadings = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const classes = token.attrGet('class') || '';
    // Add your custom class here
    const customClass = `font-serif ${tagSize(token.tag)} ${theme.text.primary ? theme.text.primary : ""}`;

    // Append the custom class to existing classes
    token.attrSet('class', classes + ' ' + customClass);

    // Pass control to the default renderer
    return self.renderToken(tokens, idx, options, env, self);
}

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

