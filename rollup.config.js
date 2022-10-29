import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
// import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript2 from "rollup-plugin-typescript2";
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

const packageJson = require("./package.json");

// export default [
//   {
//     input: "src/index.ts",
//     output: [
//       // {
//       //   file: packageJson.main,
//       //   format: "cjs",
//       //   sourcemap: true,
//       // },
//       {
//         file: packageJson.module,
//         format: "esm",
//         sourcemap: true,
//       },
//     ],
//     plugins: [
//       peerDepsExternal(),
//       resolve(),
//       commonjs(),
//       typescript2({ tsconfig: "./tsconfig.json" }),
//       postcss(),
//     ],
//     external: ["react", "react-dom"],
//   },
//   {
//     input: "dist/esm/index.d.ts",
//     output: [{ file: "dist/index.d.ts", format: "esm" }],
//     plugins: [dts()],
//     external: [/\.(css|less|scss)$/, "react", "react-dom"],
//   },
// ];

export default {
    input: "src/index.ts",
    output: [
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: true,
      // },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript2({ tsconfig: "./tsconfig.json" }),
      postcss(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      terser(),
    ],
    external: ["react", "react-dom"],
  }