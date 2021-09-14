import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import eslint from "@rollup/plugin-eslint";

export default {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), eslint(), terser()],
};
