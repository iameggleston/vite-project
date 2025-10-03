const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリをセット
  dir: './',
});

// Jestのカスタム設定を設置する場所。従来のプロパティはここで定義
const customJestConfig = {
  // 各テストを実行する前に、さらにセットアップオプションを追加する
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

// createJestConfigを定義することによって、本ファイルで定義された設定がNext.jsの設定に反映される
module.exports = createJestConfig(customJestConfig);
