import { actionCreator } from "./actionCreator";

export type UpdateModifiedPayload = boolean;

export const updateModified = actionCreator<UpdateModifiedPayload>(
  "UPDATE_MODIFIED"
);
