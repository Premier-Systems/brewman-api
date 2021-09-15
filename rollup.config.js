import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [typescript({ tsconfig: "./tsconfig.json" }), terser()],
};
