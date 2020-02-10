export async function writeFile(
  content: string,
  handler: FileSystemFileHandle
) {
  const writer = await handler.createWriter();
  await writer.write(0, content);
  await writer.close();
}

export async function getFileHandle() {
  const handle = await window.chooseFileSystemEntries({
    type: "openFile",
    accepts: [{ extensions: ["md"] }]
  });

  return handle as FileSystemFileHandle;
}

export async function getNewFileHandle() {
  const handle = await window.chooseFileSystemEntries({
    type: "saveFile",
    accepts: [{ extensions: ["md"] }]
  });

  return handle as FileSystemFileHandle;
}
