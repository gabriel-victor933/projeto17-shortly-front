# Shortly: Front-end
O front-end do projeto Shortly foi desenvolvido utilizando React. Ele é responsável por fornecer uma interface amigável e intuitiva para os usuários encurtarem URLs longas. Acesse o backEnd <a href="https://github.com/gabriel-victor933/projeto17-shortly">aqui</a>.

## Funcionalidades
O front-end do Shortly possui as seguintes funcionalidades:

- Formulário para inserir a URL original e gerar um link encurtado.
- Exibição do link encurtado gerado.
- Estatísticas de acesso aos links encurtados, incluindo número de cliques, data e hora.
- Possibilidade de personalização do link encurtado.
- Interface responsiva para uma experiência de usuário agradável em diferentes dispositivos.

<p align="center">
  <img width="400" height="450" src="shortly1.gif"/>
</p>

<p align="center">
  <img width="400" height="450" src="shortly.gif"/>
</p>



## Configuração do ambiente:
1. Clone os repositórios dos projeto (clique <a href="https://github.com/gabriel-victor933/projeto17-shortly">aqui</a> para acesar o backend):
2. Instale as dependências do projeto: `npm i`;
3. Crie um arquivo `.env` no repositório do frontend e insira o link do servidor em uma variavel chamada 
`REACT_APP_API_URL=http://localhost:5000`.
4. Com o postgres Instalado crie um banco de dados chamado "shortly_db" e execute o dump como os comandos:
- `sudo -i -u postgres`
- `psql shortly_db < dump.sql`
5. Crie um arquivo `.env` no repositório do backend e insira a variavél: 
`DATABASE_URL = postgresql://postgres_user:postgres_password@localhost:5432/shortly_db`
6. Inicio o servidor usando `npm run dev` e em seguida inicie o front usando `npm run start`;