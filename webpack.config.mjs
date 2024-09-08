import path from "path"; // Use ES module syntax for importing modules

export default {
  entry: "./src/getExample.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    globalObject: "this",
    library: {
      name: "exampleGenerator",
      type: "umd",
    },
  },
  mode: "production",
};
