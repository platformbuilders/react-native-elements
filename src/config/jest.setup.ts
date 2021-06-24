// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// global.fetch = require('jest-fetch-mock');
// Enzyme.configure({ adapter: new Adapter() });

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)'],
};
