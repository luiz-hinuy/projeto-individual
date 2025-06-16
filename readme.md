# Sistema de Agendamentos de Salas

Este projeto é uma aplicação web desenvolvida em Node.js que permite a reserva de salas por usuários em horários específicos. Ele segue a arquitetura MVC e está estruturado para facilitar futuras expansões, como autenticação de usuários e verificação de conflitos entre agendamentos.

## 📁 Estrutura do Projeto

```plaintext
projeto-individual/
├── config/
│   └── database.js
├── controllers/
│   └── HomeController.js
├── models/
│   ├── User.js
│   ├── Room.js
│   └── Booking.js
├── routes/
│   └── index.js
├── services/
│   └── bookingService.js
├── views/
│   └── index.ejs
├── tests/
│   └── example.test.js
├── docs/
│   ├── modelo-banco.png
│   └── modelo-banco.sql
├── .gitignore
├── .env.example
├── jest.config.js
├── package.json
├── package-lock.json
├── server.js
├── readme.md
└── WAD.md
```


## Como executar localmente

### Pré-requisitos

- Node.js (versão 18 ou superior)

### Passos

```bash
git clone https://github.com/luiz-hinuy/projeto-individual.git
cd projeto-individual
npm install
node server.js
```
E por fim, escreva em seu navegador `http://localhost:3000/`

Você verá a página inicial com a mensagem: "Bem-vindo ao sistema de agendamentos!" e mais 3 botões: Home, Bookings, New Booking.

Ao clicar em booking, você verá uma tela com uma tabela com todos os agendamentos no banco de dados:

<div align = "center">

<sup>Figura 1: Tela de bookings.</sup><br>

<img src="../assets/agendamentos" width="300"><br>

<sub>Fonte: Material produzido pelos autores (2025). </sub><br>

</div>

Para adicionar um novo agendamento, clique em New Booking. Ao clicar, será redirecionado para uma página com um formulário que pede número da sala, usuário, e datas de início e fim do agendamento:

<div align = "center">

<sup>Figura 2: Tela de criação de booking.</sup><br>

<img src="../assets/formulario" width="300"><br>

<sub>Fonte: Material produzido pelos autores (2025). </sub><br>

</div>

Para finalizar a criação, basta clicar em "Create Booking", e a reserva aparecerá na primeira linha da página "Bookings".

Segue um link mosrando o funcionamento da apliacação:

https://youtu.be/f1Mvt7JC43k