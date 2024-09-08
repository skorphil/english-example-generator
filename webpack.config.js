import path from "path"; // Use ES module syntax for importing modules

export default {
  entry: "./src/getExample.js", // Entry point for your application
  output: {
    filename: "bundle.js", // Output file name
    path: path.resolve(process.cwd(), "dist"), // Output directory
    library: "YourLibraryName", // Name of the exposed global variable
    libraryTarget: "umd", // Universal module definition for browser and Node.js environments
  },
  mode: "production", // Production mode for optimizations
};
