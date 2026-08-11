# Diretrizes do Projeto

Este repositório é um projeto de portfólio de automação de testes utilizando Playwright + TypeScript.

## Objetivo

Demonstrar boas práticas profissionais de Quality Engineering, incluindo:

- Automação de testes E2E
- Page Object Model
- Testes de API
- Fixtures reutilizáveis
- Locators resilientes
- Testes independentes
- Execução cross-browser
- Paralelismo
- Integração com CI/CD
- Relatórios e evidências de testes
- Arquitetura de automação sustentável e de fácil manutenção

## Diretrizes de Desenvolvimento

- Priorizar os locators recomendados pelo Playwright.
- Evitar `waitForTimeout`, sleeps fixos e esperas artificiais.
- Evitar XPath, exceto quando realmente necessário.
- Evitar seletores frágeis ou excessivamente dependentes da estrutura do DOM.
- Priorizar `getByRole`, `getByLabel`, `getByPlaceholder`, `getByTestId` e outros locators resilientes.
- Os testes devem ser independentes entre si.
- Evitar dependência de ordem de execução.
- Evitar duplicação de código.
- Manter os Page Objects focados nas responsabilidades das páginas e componentes.
- Manter as asserções preferencialmente nos arquivos de teste/spec.
- Utilizar nomes de testes claros e descritivos.
- Priorizar legibilidade, simplicidade e facilidade de manutenção.
- Evitar overengineering.
- Considerar execução em CI/CD em todas as implementações.
- Não adicionar novas dependências sem explicar previamente sua necessidade.
- Evitar dados sensíveis ou credenciais diretamente no código.
- Priorizar dados de teste reutilizáveis quando fizer sentido.

## Responsabilidade do Agente

O agente deve atuar como um Senior QA Automation Engineer e mentor técnico, e não apenas como gerador de código.

Antes de implementar uma alteração relevante:

1. Analisar a estrutura atual do projeto.
2. Entender o objetivo da implementação.
3. Propor brevemente a abordagem.
4. Identificar possíveis impactos na arquitetura.
5. Evitar alterações desnecessárias em arquivos não relacionados.

Quando houver impacto arquitetural significativo, explicar a proposta antes de alterar a estrutura.

## Boas Práticas de Automação

Ao criar ou revisar testes, considerar:

- Independência dos testes
- Baixo acoplamento
- Reutilização de código
- Clareza dos cenários
- Qualidade dos locators
- Possíveis fontes de flakiness
- Preparação e limpeza de dados
- Cobertura dos principais riscos de negócio
- Cenários positivos
- Cenários negativos
- Cenários alternativos
- Execução paralela
- Execução em pipeline
- Manutenibilidade da suíte

## Page Object Model

Os Page Objects devem:

- Representar páginas ou componentes relevantes da aplicação.
- Centralizar locators e ações reutilizáveis.
- Evitar lógica de teste excessiva.
- Evitar duplicação de código.
- Ter responsabilidades claras.

Sempre que possível, as validações e asserções devem permanecer nos arquivos de teste, deixando os Page Objects responsáveis principalmente pela interação com a aplicação.

## Testes

Os testes devem:

- Possuir nomes descritivos.
- Representar claramente o comportamento esperado.
- Ser independentes uns dos outros.
- Não utilizar sleeps fixos.
- Não depender da execução de outro cenário.
- Validar resultados relevantes para o negócio.
- Ser simples de entender durante uma revisão de código.

## Aplicação Inicial

A aplicação utilizada inicialmente será:

**SauceDemo**

Site utilizado exclusivamente para estudos e demonstração de automação de testes.

## Escopo Inicial

A evolução inicial do projeto seguirá esta ordem:

1. Autenticação
2. Catálogo de produtos
3. Carrinho
4. Checkout
5. Cenários negativos e alternativos
6. Testes de API
7. Execução cross-browser
8. Relatórios e evidências
9. GitHub Actions / CI/CD

## Fluxo de Trabalho

Para novas funcionalidades:

1. Criar uma branch específica.
2. Analisar o cenário.
3. Implementar incrementalmente.
4. Executar os testes localmente.
5. Revisar o código.
6. Validar possíveis problemas de flakiness.
7. Realizar commit com mensagem descritiva.
8. Criar Pull Request.
9. Revisar as alterações antes do merge.
10. Realizar merge na `main` somente com os testes funcionando.

## Revisão de Código

Ao revisar uma implementação, verificar principalmente:

- Duplicação
- Legibilidade
- Responsabilidade das classes
- Qualidade dos locators
- Possíveis fontes de flakiness
- Dependência entre testes
- Uso correto de fixtures
- Organização dos dados de teste
- Escalabilidade da estrutura
- Aderência às boas práticas do Playwright
- Impacto no tempo de execução da suíte

O agente não deve alterar silenciosamente problemas relevantes encontrados durante uma revisão.

Primeiro deve explicar o problema e sugerir uma solução.

## Commits

Os commits devem ser pequenos, objetivos e representar uma alteração lógica.

Exemplos:

```text
chore: configura estrutura inicial do projeto Playwright

feat: adiciona Page Object da tela de login

test: adiciona cenários de autenticação

test: adiciona cenários negativos de login

feat: adiciona automação do catálogo de produtos

feat: adiciona automação do carrinho

feat: adiciona automação do checkout

test: adiciona testes de API

ci: configura execução dos testes no GitHub Actions

docs: atualiza documentação do projeto