This is a Human GPT 

# Stack

-   Next.js
-   Prisma \Postgres
-   Shadcn\ui
-   ...


# Project for dev

```bash
# get project
git pull origin main
npm install

# db and s3
docker compose up -d
npx prisma migrate dev 

# start project
npm run dev
```

Open 

-   [http://localhost:3000](http://localhost:3000) website
-   npx prisma studio and open [http://localhost:5555](http://localhost:5555)
-   [http://localhost:5555](http://localhost:9001) s3


# Docker

```bash
docker compose up -d

# stop docker
docker compose down
 
# remove all volumes
docker compose down -v 

# list 
docker ps
```


# PRISMA

```bash
# create migration based on schema
npx prisma migrate dev

# apply migration
npx prisma db push

# revert migration
npx prisma migrate resolve --rolled-back MIGRATION_NAME

# run studio
npx prisma studio
```

```bash
# code style 
npm run prettier or ctrl+shift+i

# unit test 
npx jest
```


# FEATURE FLOW

```bash
git checkout main
git pull origin main
git -b feature/add-header
git commit -m (semantic commit name)
git push origin BRANCH-NAME
```

## GITHUB 

-   pull request to main from feature branch
-   PR review from maintainer
-   Merge to main and delete branch
-   manual test on stage
-   NEW PR to release branch (release -> main) (name release 03.11)
-   Merge to release


## Branch

-   feature - for adding, removing or modifying a feature
-   bugfix - for fixing a bug
-   test - for experimenting outside of an issue/ticket


## Commit

-   feat is for adding a new feature
-   fix is for fixing a bug
-   refactor is for changing code for peformance or convenience purpose (e.g. readibility)
-   chore is for everything else (writing documentation, formatting, adding tests, cleaning useless code etc.)


## Examples commit

-   git commit -m 'feat: add new button component; add new button components to templates'
-   git commit -m 'fix: add the stop directive to button component to prevent propagation'
-   git commit -m 'refactor: rewrite button component in TypeScript'
-   git commit -m 'chore: write button documentation'

