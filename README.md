# 🚀 Desafio Técnico NTT DATA Brasil – QA Cypress

## 🧪 Desafio de Automação com Cypress

Utilizando o framework **Cypress** e a linguagem **JavaScript**, desenvolva:

- ✅ **3 cenários de testes E2E automatizados para o frontend**
- ✅ **3 cenários de testes automatizados para a API**

### 🔗 Aplicação
- **Frontend**: [https://front.serverest.dev/](https://front.serverest.dev/)
- **Swagger API**: [https://serverest.dev/](https://serverest.dev/)

---

## 📋 Requisitos

- Utilizar o **GitHub** para hospedar o código.
- Compartilhar o repositório ao finalizar o desafio.
- Recomendação: utilizar ao máximo recursos/comandos **nativos do Cypress**.

---

## ✅ Critérios de Avaliação

- Adoção de boas práticas de desenvolvimento.
- Qualidade na construção do código.
- Aplicação de padrões de projeto.
- Clareza e adequação das assertivas nos testes.
- Escrita e organização dos cenários de teste.
- Qualidade e clareza nas mensagens de **commit**.

---

## ⏳ Prazo

> O desafio deverá ser finalizado em até **3 dias úteis**.


---

# 🧪 Como executar os testes automatizados deste projeto (Cypress)

## 🔧 1. Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:
- Visual Studio Code (VSCode) ou outro editor de código de sua preferência
- Terminal Bash, PowerShell ou similar
- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [Git](https://git-scm.com/)

## 📥 2. Clonar o repositório

Clone este repositório para sua máquina local com o comando:
- **git clone https://github.com/viniciuscarneironascimento/desafio-nttdata-qa-cypress**

Acesse a pasta do projeto com comando:
- **cd desafio-nttdata-qa-cypress**

Os testes estão na pasta:
- **cypress/e2e/**

## 📦 3. Instalar as dependências
Após acessar a pasta do projeto, instale as dependências com o comando:
- **npm install**

Isso irá instalar o Cypress e todas as bibliotecas necessárias para executar os testes.

## ▶️ 4. Executar os testes
4.1 Modo headless (execução automática de todos os testes via terminal sem abrir o navegador):
- **npx cypress run**

4.2 Modo interativo (com interface gráfica, executa o Cypress com interface gráfica):
- **npx cypress open**



---

# 📝 Como eu realizei este desafio

1. **Leitura e entendimento das regras de negócio do desafio**  
   ⏱️ Início: 09:25 - 08/05/2025

2. **Definição do plano de teste** (vide anexo)

3. **Preparação do ambiente**  
   - Verificação de acesso ao frontend e Swagger fornecidos  
   - Nome do repositório: `desafio-nttdata-qa-cypress`  
   - Criação no GitHub: [link do repositório](https://github.com/viniciuscarneironascimento/desafio-nttdata-qa-cypress)  
   - Inicialização de projeto Node.js (v22.14.0)  
   - Instalação do Cypress (v14.3.3) como dependência de desenvolvimento  

4. **Configuração do repositório Git**  
   - Inicialização do repositório local e primeiro commit  
   - Vinculação ao repositório remoto  
   - Verificação dos arquivos versionados  
   - Proteção da branch `main` (somente via Pull Request)

5. **Definição de nomenclatura para branches**  
   - `feature/testes-e2e`  
   - `feature/testes-api`

6. **Desenvolvimento dos testes E2E para o frontend**  
   - Cenários:  
     - Cadastro com sucesso  
     - Login com dados inexistentes  
     - Login com sucesso  

7. **Revisão e merge dos testes E2E via Pull Request**  
   - Desabilitei aprovação obrigatória temporariamente para prosseguir

8. **Implementação da pipeline de CI/CD via GitHub Actions**  
   - Branch: `feature/pipeline-CICD`  
   - Validação de PRs com execução automática dos testes

9. **Desenvolvimento dos testes para a API**  
   - Cenários:  
     - Cadastro de usuário  
     - Login com autenticação  
     - Busca de usuário por ID  
     - Exclusão de usuário  

10. **Refatoração**  
    - Adequações para eliminar dados fixos e garantir independência entre testes

11. **Criação do `README.md`**  
    - Documentação clara e organizada do projeto

12. **Finalização e entrega do projeto**
⏱️ 14:05 - 09/05/2025


---


# 🧪 Plano de Teste

## ✅ 1. Objetivo e Escopo

Apresentar conhecimentos de testes automatizados com Cypress no contexto do desafio técnico para vaga de QA na **NTT DATA Brasil**.

**Escopo:**  
Utilizar o framework **Cypress** e a linguagem **JavaScript** para a criação de **3 cenários de testes E2E para o frontend** e **3 cenários de testes para a API** da aplicação.

---

## 🛠️ 2. Estratégia de Teste

- **Tipo de teste:** Funcional  
- **Execução:** Manual e Automatizada  
- **Estratégia:** Teste exploratório para familiarização com a aplicação e definição dos cenários mais relevantes para automação.

---

## 📐 3. Critérios de Aceitação

Serão avaliados os seguintes pontos:

- Uso do GitHub para versionamento e compartilhamento do código
- Utilização de recursos nativos do Cypress
- Boas práticas de desenvolvimento
- Qualidade na escrita e organização do código
- Aplicação de padrões de projeto
- Clareza e adequação das assertivas
- Organização dos cenários de teste
- Clareza e qualidade dos commits

---

## 📅 4. Cronograma

Prazo de entrega: **até 3 dias úteis**  
Início: **08/05/2025**  
Fases: definição dos testes, implementação, revisão e entrega final.

---

## 👥 5. Responsabilidades

O desafio será executado e entregue por **um único QA responsável**.

---

## 🛠️ 6. Ambiente de Testes

- **Recursos necessários:**  
  - Node.js  
  - Cypress  
  - Git e GitHub  
  - Editor de código (VSCode)  
- **Controle de versão:** Git  
- **Execução local e via CI/CD**

---

## 📝 7. Casos de Teste

Serão especificados e implementados:

- **Frontend (E2E):**
  - Cadastro com sucesso
  - Login com dados inexistentes
  - Login com sucesso

- **API:**
  - Cadastro de usuário
  - Login com autenticação
  - Consulta de usuário por ID ou exclusão

---

## 🐞 8. Gestão de Defeitos

Caso necessário, defeitos serão documentados em um **relatório em PDF** e anexados ao repositório.

---

## 📊 9. Métricas e Relatórios

As seguintes métricas poderão ser acompanhadas:

- Taxa de sucesso dos testes
- Número de falhas encontradas
- Cobertura dos fluxos principais (happy path)

---

## ⚠️ 10. Riscos e Mitigações

- **Riscos:**  
  - Tempo limitado  
  - Dados instáveis ou removidos do ambiente de teste  
  - Bibliotecas externas ou dependências frágeis  

- **Mitigações:**  
  - Foco nos cenários críticos de negócio  
  - Execução em modo headless para agilidade  
  - Evitar dependência entre testes  
  - Uso de dados dinâmicos sempre que possível


---


### 🧰 Recursos Utilizados
Durante a execução do desafio, foram utilizados os seguintes recursos e ferramentas:
- **Visual Studio Code (VS Code):** editor principal para desenvolvimento e organização dos arquivos de teste.
- **GitHub:** hospedagem e versionamento do código, criação de branches, pull requests e proteção da branch `main`.
- **Word:** utilizado para documentação auxiliar e plano de teste (anexado ao repositório).
- **Notebook pessoal:** ambiente local para desenvolvimento e execução dos testes.
- **Terminal Bash + Git CLI:** para gerenciamento de versão, execução de comandos Git e interações com o repositório remoto.

---

### 🔧 Melhoria Aplicada
Uma das melhorias implementadas no desafio foi a **integração contínua (CI/CD)**, permitindo que a execução dos testes fosse automatizada a cada novo Pull Request (PR).
- Foi criada uma **pipeline utilizando GitHub Actions** que roda os testes sempre que há um novo PR ou push na branch principal.
- Essa melhoria garante mais segurança e visibilidade na evolução do projeto, validando automaticamente os testes e evitando que código com falhas seja integrado à `main`.

---

### 🚀 Sugestões de Melhoria Futura
Para ampliar a visibilidade e a rastreabilidade dos testes, as seguintes melhorias são sugeridas como evolução do projeto:
- **Geração de relatórios com Mochawesome:**
  - Permite obter relatórios HTML com detalhes visuais e estatísticas dos testes executados.
  - Facilita a leitura dos resultados por partes interessadas não técnicas.

- **Integração com Cypress Cloud:**
  - Gera relatórios centralizados, com histórico de execuções, vídeos e screenshots dos testes.
  - Permite compartilhamento fácil dos resultados com a equipe e stakeholders.
  - Auxilia na identificação de flakiness, tempo de execução e pontos de melhoria nos testes.

- **Execução paralela dos testes:** para ganho de performance nas pipelines.
- **Criação de massa de dados automatizada:** para evitar dependência de dados fixos que expiram com o tempo.
