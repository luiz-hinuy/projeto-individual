# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O projeto consiste no desenvolvimento de um sistema de agendamentos de salas, onde usuários podem reservar horários disponíveis para uso de ambientes cadastrados. A aplicação será estruturada utilizando Node.js com o framework Express.js, e seguirá o padrão arquitetural MVC (Model-View-Controller), promovendo organização, separação de responsabilidades e escalabilidade.

O sistema será útil em ambientes corporativos, educacionais ou coworkings, permitindo que usuários visualizem, agendem e consultem reservas de salas. A primeira entrega tem como foco estruturar o backend da aplicação, organizar as pastas e arquivos do projeto, modelar o banco de dados e garantir que o servidor esteja rodando corretamente com uma rota funcional.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

*Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário.*

### 2.2. User Stories (Semana 01 - opcional)

*Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária.*

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)

Foi realizada uma modelagem de banco de dados que atende à lógica central do sistema: usuários reservando salas em horários específicos. A modelagem foi dividida em duas etapas complementares: o modelo relacional (diagrama) e o modelo físico (código SQL).

O modelo relacional apresenta graficamente as entidades principais do sistema (users, rooms, bookings) e os relacionamentos entre elas. Ele permite visualizar como os dados estão conectados, destacando as chaves primárias e estrangeiras que garantem a integridade referencial.

<div align = "center">

<sup>Figura 1: Forças de Porter do mercado da empresa Bayer.</sup><br>

<img src="../assets/modelo-banco.png"><br>

<sub>Fonte: Material produzido pelos autores (2025).</sub><br>
</div>

Já o modelo físico descreve tecnicamente a estrutura do banco de dados por meio de comandos SQL. Ele define os tipos de dados de cada campo, as restrições (como `NOT NULL` e `UNIQUE`) e a ligação entre tabelas através de `FOREIGN KEY`. Os modelos foram pensados para refletir a lógica de agendamento onde um usuário pode fazer várias reservas, ua sala pode ser reservada múltiplas vezes, e cada reserva deve conter a informação do usuário, da sala e do tempo de reserva. O código SQL se encontra em `projeto-individual\scripts\modelo-banco.sql`.

### 3.1.1 BD e Models (Semana 5)
*Descreva aqui os Models implementados no sistema web*

### 3.2. Arquitetura (Semana 5)

*Posicione aqui o diagrama de arquitetura da sua solução de aplicação web. Atualize sempre que necessário.*

**Instruções para criação do diagrama de arquitetura**  
- **Model**: A camada que lida com a lógica de negócios e interage com o banco de dados.
- **View**: A camada responsável pela interface de usuário.
- **Controller**: A camada que recebe as requisições, processa as ações e atualiza o modelo e a visualização.
  
*Adicione as setas e explicações sobre como os dados fluem entre o Model, Controller e View.*

### 3.3. Wireframes (Semana 03 - opcional)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05 - opcional)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)

*Utilize um link para outra página de documentação contendo a descrição completa de cada endpoint. Ou descreva aqui cada endpoint criado para seu sistema.*  

### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---
---