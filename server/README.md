generator package.json default
npm init -y

dev server install
npm i ts-node -D
npm i ts-node-dev -D

typescript config
npx tsc --init

run server static
npx ts-node .\src\server.ts

run server listen dev
npx ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts

run server script
npm run dev

run migration
npx knex --knexfile knexfile.ts migrate:latest

run migration script
npm run knex:migration

run seed
knex --knexfile knexfile.ts seed:run

run seed script
npm run knex:seed
