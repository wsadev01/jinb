import MarkdownIt from 'markdown-it';
import * as core from './functions.js';

export const lillymd = new MarkdownIt();

const customRender = (customClass) => {
  return (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    const classes = token.attrGet('class') || '';
    // Add your custom class here

    // Append the custom class to existing classes
    token.attrSet('class', classes + ' ' + customClass);

    return self.renderToken(tokens, idx, options, env, self);
  }
}

const headingsOpenRender = (tokens, idx, options, env, self) => {
  const token = tokens[idx];
  const classes = token.attrGet('class') || '';
  // Add your custom class here
  const customClass = `font-serif ${core.tagSize(token.tag)} text-font-primary`;

  // Append the custom class to existing classes
  token.attrSet('class', classes + ' ' + customClass);

  return self.renderToken(tokens, idx, options, env, self);
}

const hrRenderer = (tokens, idx, options, env, self) => {
  // Add your custom classes here
  const token = tokens[idx];
  console.log(token);
  const classes = token.attrGet('class') || '';
  const customClass = 'border-divider';
  token.attrSet('class', classes + ' ' + customClass);
  return self.renderToken(tokens, idx, options, env, self);
};

// Markdown triggers listed below.
//    heading_open: Triggered when a heading tag (<h1>, <h2>, <h3>, etc.) is opened.
//    heading_close: Triggered when a heading tag (<h1>, <h2>, <h3>, etc.) is closed.
//    paragraph_open: Triggered when a paragraph tag (<p>) is opened.
//    paragraph_close: Triggered when a paragraph tag (<p>) is closed.
//    blockquote_open: Triggered when a blockquote tag (<blockquote>) is opened.
//    blockquote_close: Triggered when a blockquote tag (<blockquote>) is closed.
//    hr: Triggered when a horizontal rule (<hr>) is encountered.
//    list_item_open: Triggered when a list item (<li>) is opened.
//    list_item_close: Triggered when a list item (<li>) is closed.
//    bullet_list_open: Triggered when an unordered list (<ul>) is opened.
//    bullet_list_close: Triggered when an unordered list (<ul>) is closed.
//    ordered_list_open: Triggered when an ordered list (<ol>) is opened.
//    ordered_list_close: Triggered when an ordered list (<ol>) is closed.
//    code_block: Triggered when a code block (``` or ~~~) is encountered.
//    inline: Triggered when inline content is encountered (e.g., emphasis, strong, link, image, etc.).
//    softbreak: Triggered when a soft line break (newline) is encountered.
//    hardbreak: Triggered when a hard line break (two or more spaces followed by a newline) is encountered.
//    table_open: Triggered when a table (<table>) is opened.
//    table_close: Triggered when a table (<table>) is closed.
//    thead_open: Triggered when a table head (<thead>) is opened.
//    thead_close: Triggered when a table head (<thead>) is closed.
//    tbody_open: Triggered when a table body (<tbody>) is opened.
//    tbody_close: Triggered when a table body (<tbody>) is closed.
//    tr_open: Triggered when a table row (<tr>) is opened.
//    tr_close: Triggered when a table row (<tr>) is closed.
//    td_open: Triggered when a table cell (<td>) is opened.
//    td_close: Triggered when a table cell (<td>) is closed.
//    th_open: Triggered when a table header cell (<th>) is opened.
//    th_close: Triggered when a table header cell (<th>) is closed.
//    link_open: Triggered when a link is open (<a>).

lillymd.renderer.rules.heading_open = headingsOpenRender;
lillymd.renderer.rules.paragraph_open = customRender('font-serif text-font-primary');
lillymd.renderer.rules.hr = customRender('border-divider');
lillymd.renderer.rules.link_open = customRender('text-primary-light text-primary-dark:hover hover:underline');
