commands.md for mod4 grp proj

npx dotenv sequelize db:create

npx sequelize model:generate --name User --attributes "username:string,password:string,email:string"
npx sequelize model:generate --name List --attributes "name:string,description:text,userId:integer"
npx sequelize model:generate --name Task --attributes "name:string,description:text,isComplete:boolean,listId:integer,userId:integer"
 npx dotenv sequelize-cli db:migrate