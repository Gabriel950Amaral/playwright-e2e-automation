# Playwright E2E Automation

Projeto de automação de testes end-to-end da aplicação SauceDemo utilizando Playwright + TypeScript. O objetivo deste repositório é demonstrar boas práticas de Quality Engineering, com foco em automação E2E, organização da suíte, Page Object Model, locators resilientes e execução cross-browser.

## 1. Objetivo do projeto

Este projeto foi criado para apresentar uma estrutura profissional de automação de testes, com foco em:

- automação E2E de fluxos de negócio;
- Page Object Model (POM);
- testes independentes;
- locators resilientes;
- execução em múltiplos navegadores;
- organização e manutenibilidade da suíte;
- boas práticas para reduzir flakiness.

O repositório não representa código de produção da SauceDemo, mas sim uma base de estudo e portfólio para demonstração de qualidade em automação de testes.

## 2. Tecnologias utilizadas

As tecnologias presentes no projeto são:

- Playwright
- TypeScript
- Node.js
- npm

## 3. Integração Contínua

O projeto já possui um workflow de GitHub Actions em `.github/workflows/playwright.yml`.

Esse pipeline é disparado quando há eventos de:

- push em `main` ou `master`;
- pull request para `main` ou `master`.

Durante a execução, o workflow realiza as etapas abaixo:

- instala as dependências do projeto com `npm ci`;
- instala os browsers do Playwright com `npx playwright install --with-deps`;
- executa a suíte de testes com `npx playwright test`;
- publica o artefato `playwright-report` em caso de execução concluída ou falha, conforme a configuração do workflow.

O workflow não adiciona etapas além destas que estão declaradas no arquivo atual.

## 4. Arquitetura

A arquitetura do projeto segue o padrão de Page Object Model, com separação clara entre:

- `tests/`: arquivos de spec com cenários e asserções;
- `pages/`: classes que encapsulam locators e interações com a interface;
- `tests/data/`: dados reutilizáveis para os testes;
- `playwright.config.ts`: configuração central da execução, incluindo base URL, projetos de navegador e relatórios.

Essa estrutura mantém a lógica de teste em arquivos de spec e centraliza a interação com a página em classes dedicadas, facilitando manutenção e reutilização.

## 5. Estrutura de diretórios

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml
├── pages/
│   ├── LoginPage.ts
│   └── ProductsPage.ts
├── tests/
│   ├── data/
│   │   └── testData.ts
│   ├── login.spec.ts
│   └── products.spec.ts
├── .gitignore
├── package-lock.json
├── package.json
├── playwright.config.ts
├── playwright-report/
├── README.md
└── test-results/
```

## 6. Cenários automatizados

A suíte atual contém 7 cenários automatizados, distribuídos em duas áreas principais.

### Autenticação

- login com credenciais válidas;
- tentativa de login com credenciais inválidas.

### Catálogo de produtos

- visualização do catálogo após autenticação;
- validação da quantidade de produtos exibidos;
- validação de nome e preço de um produto específico;
- ordenação de produtos por nome;
- ordenação de produtos por preço.

Esses cenários estão implementados nos arquivos de spec do projeto e representam o escopo atual da automação.

> Importante: atualmente existem 7 cenários automatizados. Quando a suíte é executada em Chromium, Firefox e WebKit, isso resulta em 21 execuções no total da execução cross-browser completa.

## 7. Estratégia de testes

A implementação atual considera boas práticas de automação, como:

- testes independentes;
- uso de `test.beforeEach` para preparação do login no módulo de catálogo;
- reutilização de Page Objects;
- ausência de `waitForTimeout` ou esperas artificiais fixas;
- asserções mantidas nos arquivos de spec;
- validação de ordenação por comparação da sequência completa apresentada;
- preferência por locators estáveis e consistentes com a estrutura da aplicação.

## 8. Execução cross-browser

A configuração atual do Playwright inclui os seguintes projetos:

- Chromium
- Firefox
- WebKit

Isso significa que os mesmos cenários são executados em diferentes navegadores, conforme definido em `playwright.config.ts`.

A execução completa em cross-browser gera mais execuções do que cenários, pois cada cenário é executado em cada projeto configurado. Na prática, 7 cenários em 3 navegadores resultam em 21 execuções.

## 9. Pré-requisitos

Para executar este projeto localmente, são necessários:

- Node.js
- npm
- Git

## 10. Instalação

```bash
git clone https://github.com/Gabriel950Amaral/playwright-e2e-automation.git
cd playwright-e2e-automation
npm install
npx playwright install
```

## 11. Executando os testes

Execução completa da suíte:

```bash
npx playwright test
```

Execução em modo visual:

```bash
npx playwright test --headed
```

Execução de um arquivo específico:

```bash
npx playwright test tests/login.spec.ts
```

Execução em um browser específico:

```bash
npx playwright test --project=chromium
```

## 12. Relatório

O projeto utiliza o HTML Reporter configurado pelo Playwright, e o relatório pode ser visualizado com:

```bash
npx playwright show-report
```

## 13. Boas práticas aplicadas

Algumas práticas já adotadas no projeto incluem:

- Page Object Model;
- locators resilientes ou baseados em atributos estáveis;
- testes independentes;
- ausência de `waitForTimeout`;
- separação clara entre interação e validação;
- dados de teste reutilizáveis;
- execução em múltiplos browsers;
- validação de listas e ordenações por comparação da sequência exibida.

## 14. Próximas evoluções

As próximas evoluções previstas para este projeto, como possibilidades futuras, incluem:

- carrinho;
- checkout;
- testes de API;
- fixtures de autenticação;
- uso de `storageState`;
- relatórios adicionais;
- expansão da suíte de testes e cenários de regressão.

Essas funcionalidades ainda não estão implementadas na estrutura atual do repositório.

## 15. Autor

**Gabriel Amaral**

## Resumo

Este repositório apresenta uma estrutura profissional de automação E2E com Playwright + TypeScript, aplicada à aplicação SauceDemo. O projeto demonstra boas práticas de Quality Engineering, organização por Page Object Model, testes independentes e execução cross-browser, mantendo foco em legibilidade, manutenção e redução de flakiness.
