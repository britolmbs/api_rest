# API REST • Simulação de Escola.

Esta é uma API REST desenvolvida para simular a gestão de uma escola, permitindo gerenciar usuários e alunos, além de suportar upload de imagens e autenticação via **Bearer Token**.

---

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução do JavaScript no servidor  
- **Express** – Framework para construção de APIs  
- **Sequelize** – ORM para interação com o banco de dados  
- **MariaDB** – Banco de dados relacional  
- **Multer** – Middleware para upload de arquivos  
- **jsonwebtoken** – Geração e validação de tokens  
- **bcryptjs** – Hash seguro de senhas  
- **dotenv** – Variáveis de ambiente  
- **nodemon** – Reload automático em desenvolvimento  
- **sequelize-cli** – Migrações e seeders  

---

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/britolmbs/api_rest.git
    cd api_rest
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo **.env** na raiz do projeto com as suas variáveis de ambiente (por exemplo, credenciais do banco, secret do JWT etc.).

---

## Execução

Inicie o servidor com:

```bash
npm run dev
```
O servidor ficará disponível em <http://localhost:3001>.

## Licença
Este projeto está licenciado sob a **MIT License**. Para mais detalhes, consulte o arquivo **LICENSE**.
