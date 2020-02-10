import { actionCreator } from "./actionCreator";

export type UpdateMarkdownPayload = string;

export const updateMarkdown = actionCreator<UpdateMarkdownPayload>(
  "UPDATE_MARKDOWN"
);
