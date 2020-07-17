/* eslint-disable @typescript-eslint/no-var-requires */
// const path = require('path');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.path.json',
      },
    },
  ],
  // webpack: {
  //   alias: {
  //     '@components': path.resolve(__dirname, 'src/components/base-components'),
  //     '@experience': path.resolve(__dirname, 'src/components/experience'),
  //     '@pages': path.resolve(__dirname, 'src/components/pages'),
  //     '@styles': path.resolve(__dirname, 'src/styles'),
  //     '@': path.resolve(__dirname, 'src/'),
  //   }
  // },
  // jest: {
  //   configure: {
  //     moduleNameMapper: {
  //       '^@(.*)$': '<rootDir>/src$1'
  //     }
  //   }
  // }
};
