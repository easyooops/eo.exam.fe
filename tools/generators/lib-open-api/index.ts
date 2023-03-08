// tools/generators/new-article/index.ts
import { generateFiles, joinPathFragments, Tree } from "@nrwl/devkit";

interface NewArticleSchemaOptions {
  title: string;
  author: string;
}
export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(
    // virtual file system
    host,
    joinPathFragments(__dirname, "./files"),
    "./libs/" + schema.title,
    {
      title: schema.title,
      author: schema.author,
      creationDate: new Date().toISOString()
    }
  );
  //   await formatFiles(host);
}
