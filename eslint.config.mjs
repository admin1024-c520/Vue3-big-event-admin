import pluginVue from 'eslint-plugin-vue'
import js from '@eslint/js'

export default [
  // 全局忽略
  {
    ignores: ['.gitignore']
  },
  // ESLint 推荐规则
  js.configs.recommended,
  // Vue3 基础规则
  ...pluginVue.configs['flat/essential'],
  // 自定义规则
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: {
        console: 'readonly',
        ElMessage: 'readonly',
        ElMessageBox: 'readonly',
        ElLoading: 'readonly'
      }
    },
    rules: {
      'vue/multi-word-component-names': [
        'warn',
        {
          ignores: ['index']
        }
      ],
      'vue/no-setup-props-destructure': ['off'],
      'no-undef': 'error'
    }
  }
]
