export default {
  // テスト環境
  testEnvironment: 'jsdom',

  // テストファイルのパターン
  testMatch: [
    '**/__tests__/**/*.(js|jsx|ts|tsx)',
    '**/*.(test|spec).(js|jsx|ts|tsx)',
  ],

  // モジュールの解決設定
  moduleNameMapping: {
    '^~/(.*)$': '<rootDir>/$1',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
  },

  // モジュールディレクトリ
  moduleDirectories: ['node_modules', '<rootDir>/'],

  // セットアップファイル
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // トランスフォーム設定
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },

  // モジュールファイル拡張子
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // カバレッジ設定
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/vite-env.d.ts',
  ],

  // カバレッジディレクトリ
  coverageDirectory: 'coverage',

  // カバレッジレポート形式
  coverageReporters: ['text', 'lcov', 'html'],
};
