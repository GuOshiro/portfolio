module.exports = {
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    "gatsby-plugin-intl": `<rootDir>/__mocks__/react-intl.js`,
    ".+\\.(css|styl|less|sass|scss})$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@constants/(.*)": "<rootDir>/src/constants/$1",
    "@images/(.*)": "<rootDir>/src/images/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
}
