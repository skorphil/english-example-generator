import path from "path"; // Use ES module syntax for importing modules

export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(process.cwd(), "dist"),
    library: "YourLibraryName", // This defines the global object name
    libraryTarget: "umd", // UMD exposes the library for all environments
    globalObject: "this", // To ensure compatibility with web workers and other environments
  },
  mode: "production",
};
