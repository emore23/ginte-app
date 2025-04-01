import next from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['node_modules/', '.next/', 'out/'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      '@next/next': next,
    },
    rules: {
      // Regras do TypeScript
      '@typescript-eslint/no-explicit-any': 'error', // Proíbe o uso de `any`
      '@typescript-eslint/no-unused-vars': 'error', // Erro para variáveis não utilizadas
      '@typescript-eslint/no-unsafe-argument': 'error', // Proíbe argumentos inseguros
      '@typescript-eslint/no-unsafe-member-access': 'error', // Proíbe acesso inseguro a membros
      '@typescript-eslint/no-unsafe-return': 'error', // Proíbe retornos inseguros
      '@typescript-eslint/consistent-type-imports': 'error', // Exige imports de tipos consistentes

      // Regras do Next.js
      '@next/next/no-html-link-for-pages': 'error', // Evita links incorretos no Next.js
      '@next/next/no-img-element': 'warn', // Evita o uso de <img> em vez de <Image> do Next.js

      // Regras gerais
      'no-console': [
        'warn',
        {
          allow: ['error'], // Permite apenas console.error
        },
      ], // Avisa sobre o uso de `console.log`
      'no-unused-expressions': 'error', // Erro para expressões não utilizadas
      'no-shadow': 'error', // Erro para variáveis com nomes repetidos em escopos diferentes
      'prefer-const': 'error', // Exige o uso de `const` para variáveis que não são reatribuídas
    },
  },
];
