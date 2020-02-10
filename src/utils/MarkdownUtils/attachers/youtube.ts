import { Transformer } from "unified";
import visit from "unist-util-visit";
import { Element } from "hast-format";

const SYNTAX_REGEXP = /^{\s*youtube\s*,\s*(.+?)\s*}$/;

export function youtubeAttacher(): Transformer {
  return tree => {
    visit<Element>(tree, "element", node => {
      if (node.tagName !== "p" || node.children[0].type !== "text") {
        return;
      }

      const value = node.children[0].value;
      const match = value.match(SYNTAX_REGEXP);
      if (match == null || match.length !== 2) {
        return;
      }
      const [, id] = match;
      node.tagName = "div";
      node.children = [
        {
          type: "element",
          tagName: "iframe",
          children: [],
          properties: {
            type: "text/html",
            src: `https://www.youtube.com/embed/${id}`,
            frameborder: "0",
            width: 600,
            height: 300
          }
        }
      ];
    });
  };
}
