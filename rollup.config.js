export default [
  {
    input: "src/index.js",
    output: {
      file: "dist/chai-tailwind.js",
      format: "iife",
      name: "ChaiCSS",
    },
  },
  {
    input: "src/index.js",
    output: {
      file: "dist/chai-tailwind.esm.js",
      format: "esm",
    },
  },
];