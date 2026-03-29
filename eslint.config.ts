import { defineConfig } from 'eslint/config';
import expoConfig from 'eslint-config-expo/flat'

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
    rules: {
        "no-console": ["warn", { "allow": ["warn", "error"] }]
    }
  },
]);
