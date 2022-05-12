# DataWeb Test

## Chosen Subject

i will build a Star Wars dashboard where the user (a minion of the empire) will fill a form for add new bounty or wanted people around the empire (should have the possibility to edit the status of the wanted with captured, deceased, ...)

every user who are not logged in should first land on the page with all the wanted profile (maybe add a filter between the kind of scum jedi, thief, murderer, smuggler)

## Tech Stack

### Front-end

- React/Typescript
- Sass

### Back-end

- NodeJS
- ExpressJs
- GraphQL


## Idea of flow
 as i have to use a local DB i think that i should provide the amount of picture that i use for build -> with the short amount of time i think that i will take a set of 20 picture at first
 when user add a wanted profile i think that its should have 2 solutions -> first no picture available (so a generic representation)
                                                                         -> second the user want to add a picture as limited in time the picture should be selected randomly (so remove already use picture)

Edit should have the possiblity to delete wanted profile or update status and information

few solution for db, first should be to have a package with a DB and export table when i build the project with some command for after set npm install the db is setup
or more easy i should save every change in the localstorage (by safety as i can use the context or redux for share state)