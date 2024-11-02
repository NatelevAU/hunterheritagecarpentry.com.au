import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import importPlugin from 'eslint-plugin-import';

const packages = [];
const paths = [];
const imgExtensions = ['png', 'jpg', 'jpeg', 'svg', 'css'];

const imgExtensionRegex = `\\.(${imgExtensions.join('|')})$`;
const imageRegex = `(.+${imgExtensionRegex})`;
const packageRegex = `(${packages.join('|')})\\/.+`;
const pathsRegex = `(${paths.join('|')})\\/.+`;
const relativeRegex = '(\\.)+\\/';

const allRegex = `(${[packageRegex, relativeRegex, packageRegex, imageRegex]
    .map(r => `(${r})`)
    .join('|')})`;

export default [
    {
        ignores: [
            '**/node_modules/**',
            '**/build/**',
            '**/dist/**',
            '**/.pnp.*',
            '**/coverage/**',
            '**/.DS_Store',
            '**/.env.*',
            '**/npm-debug.log*',
            '**/yarn-debug.log*',
            '**/yarn-error.log*'
        ]
    },
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                },
                ecmaVersion: 'latest',
                sourceType: 'module',
                project: './tsconfig.json'
            }
        },
        plugins: {
            '@typescript-eslint': tsPlugin,
            'react': react,
            'prettier': prettier,
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
            'import': importPlugin
        },
        settings: {
            react: {
                version: 'detect'
            }
        },
        rules: {
            ...tsPlugin.configs.recommended.rules,
            ...react.configs.recommended.rules,
            ...reactJsxRuntime.rules,
            '@typescript-eslint/no-floating-promises': 'off',
            'indent': 'off',
            'linebreak-style': ['warn', process.platform === 'win32' ? 'windows' : 'unix'],
            'quotes': 'off',
            'semi': ['warn', 'always'],
            'prettier/prettier': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            'no-empty-pattern': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/ban-types': 'off',
            'react/prop-types': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/no-var-requires': 'off',
            'react/no-unescaped-entities': 'off',
            'no-case-declarations': 'off',
            'unused-imports/no-unused-imports': 'warn',
            'import/newline-after-import': 'warn',
            'simple-import-sort/imports': [
                'warn',
                {
                    groups: [
                        [`^(?!${allRegex})`],
                        [`^${packageRegex}(?<!(${imgExtensionRegex}))`],
                        [`^((${relativeRegex})|(${pathsRegex}))(?<!(${imgExtensionRegex}))`],
                        [`^${imageRegex}`]
                    ]
                }
            ],
            'sort-imports': 'off',
            'import/order': 'off',
            'react/display-name': 'off',
            'no-constant-condition': 'off',
            '@typescript-eslint/no-misused-promises': 'off',
            '@typescript-eslint/no-unsafe-argument': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-empty-object-type': 'off'
        }
    }
];
