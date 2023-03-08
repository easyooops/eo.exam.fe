// tools/generators/new-article/index.ts
import { generateFiles, joinPathFragments, names, Tree } from "@nrwl/devkit";

interface NewArticleSchemaOptions {
  title: string;
  author: string;
  excerpt?: string;
}

export default async function (host: Tree, schema: NewArticleSchemaOptions) {
  generateFiles(
    // virtual file system
    host,

    // the location where the template files are
    joinPathFragments(__dirname, "./files"),

    // where the files should be generated
    "./packages/" + schema.title,

    // the variables to be substituted in the template
    {
      title: schema.title,
      author: schema.author,
      excerpt: schema.excerpt || "",
      normalizedTitle: names(schema.title).fileName,
      creationDate: new Date().toISOString()
    }
  );

  //   await formatFiles(host);
}
