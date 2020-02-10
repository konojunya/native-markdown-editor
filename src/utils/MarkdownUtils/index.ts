import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import rehypeFormat from "rehype-format";
import remarkAlign from "remark-align";
import remarkBreaks from "remark-breaks";
import html from "rehype-stringify";
import remark from "remark";
import { youtubeAttacher } from "./attachers/youtube";

export function md2html(md: string): string {
  const { contents } = unified()
    .use(markdown, { commonmark: true })
    .use(remarkAlign, {
      left: "wtAlignLeft",
      center: "wtAlignCenter",
      right: "wtAlignRight"
    })
    .use(remarkBreaks)
    .use(remark2rehype)
    .use(rehypeFormat)
    .use(youtubeAttacher)
    .use(html)
    .processSync(md);

  return contents.toString().trim();
}

export function format(md: string): string {
  return remark()
    .processSync(md)
    .toString();
}
