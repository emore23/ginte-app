# 🚀 Começando

Bem-vindo ao **Ginte App**, uma aplicação moderna de autenticação construída com as melhores tecnologias do ecossistema React.

## 📋 Pré-requisitos

- **Node.js** 18+
- **Yarn** 1.22+ ou **npm** 8+
- **Git**

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ginte-app.git

# Acesse o diretório
cd ginte-app

# Instale as dependências
yarn install

# Inicie o servidor de desenvolvimento
yarn dev
```

## 🔧 Configuração do Ambiente

### Variáveis de Ambiente

Crie um arquivo **.env.local** na raiz do projeto com as seguintes variáveis:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://api.example.com
```

### Ferramentas de Desenvolvimento

O projeto inclui configurações avançadas para garantir qualidade de código:

- **ESLint** - Padronização de código TypeScript
- **Prettier** - Formatação automática
- **Husky** - Git hooks
- **Commitlint** - Padrão de mensagens de commit
- **Insomnia** - Para acessar os endpoints da API, utilizei o insomnia só realizar a intalação e import do arquivo **teste-back-endpoints-insomnia.json** localizado na raiz do projeto.

## 🛠️ Stack Tecnológica

### Principais Tecnologias

- ⚡ **Next.js 15** - Framework React com SSR e rotas otimizadas
- 🎨 **Tailwind CSS** - Estilização utilitária
- ✨ **ShadCN/ui** - Componentes UI acessíveis
- 🔄 **TanStack Query v5** - Gerenciamento de estado server/client
- 📝 **React Hook Form + Zod** - Formulários tipados e validados
- 🔐 **Autenticação Segura** - JWT com armazenamento em cookies

### Dependências Principais

```json
{
  "dependencies": {
    "next": "15.2.4",
    "react": "^19.0.0",
    "typescript": "^5",
    "zod": "^3.24.2",
    "@tanstack/react-query": "^5.71.1",
    "react-hook-form": "^7.55.0",
    "js-cookie": "^3.0.5",
    "framer-motion": "^12.6.3",
    "lucide-react": "^0.486.0"
  }
}
```

## 🎯 Funcionalidades

### Sistema de Autenticação

✅ Login com e-mail e senha  
✅ "Manter conectado" com cookies seguros  
✅ Redefinição de senha em 3 etapas  
✅ Proteção de rotas

### UI/UX

✅ Animações fluidas com Framer Motion  
✅ Design responsivo  
✅ Componentes acessíveis  
✅ Feedback visual com React Hot Toast

## 🤖 Padrões de Código

O projeto utiliza:

- **Conventional Commits**
- **ESLint** com regras estritas para TypeScript
- **Prettier** para formatação consistente
- **Git hooks** para validação pré-commit

```bash
# Comandos úteis
yarn lint       # Verifica problemas de lint
yarn format     # Formata o código automaticamente
```

## 🚀 Deploy

O projeto está configurado para deploy na **Vercel**:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo **LICENSE** para detalhes.

## ✨ Contribuição

1. Faça o **fork** do projeto
2. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit suas mudanças:
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push para a branch:
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Abra um **Pull Request**

---

Desenvolvido com ❤️ por **Estefani More** - [@emore23](https://github.com/emore23)
