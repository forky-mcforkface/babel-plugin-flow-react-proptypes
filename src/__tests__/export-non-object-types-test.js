const babel = require("babel-core");
const content = `
export type Answer = "Yes" | "No";
`;

it("export-non-object-types", () => {
  const res = babel.transform(content, {
    babelrc: false,
    presets: ['@babel/env', '@babel/react', '@babel/flow'],
    plugins: [ "@babel/syntax-flow", require("../")]
  }).code;
  expect(res).toMatchSnapshot();
});
