import { readFile } from "fs/promises";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

/** Reads raw MDX source from a path relative to /content, ready for <MDXRemote source={...} />. */
export async function readMdx(relativePath: string): Promise<string> {
  const filePath = path.join(CONTENT_DIR, relativePath);
  return readFile(filePath, "utf-8");
}
