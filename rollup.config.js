import { babel } from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const extensions = [".ts"];

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "es",
  },
  plugins: [
    nodeResolve({ extensions }),
    babel({
      babelHelpers: "bundled",
      configFile: "./babel.config.js",
      extensions,
    }),
  ],
};
