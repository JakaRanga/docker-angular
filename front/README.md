# Create your own resume website

Clone this project, fill the resume-information.json and there we go, you got your resume online.
Let's talk about this file. You'll see multiple parts in it, I'll explain everything you need to know, don't worry.

## Profile

Simple JSON object, containing everything you want to show e.g. Name, Nationality, etc...

## Contacts

List of objects with two string in it : name and value. e.g name: "Phone", value: "555-555-5555"
In this part, list as much of contacts as you want to.

## Experiences

Again, list of objects, this one is a little bit more complex, but still not rocket science.
In this part, list as much of experiences as you want to.

## Education

List of objects that represents your educational life.
In this part, list as much of experiences as you want to.

## Skills

This list is a bit different, the object is composed of a string ("name") which is the name of your skill, and a number ("knowledge") which represents an evaluation of your knowledge of this particular skill. This knowledge can take only 5 values : 0, 25, 50, 75 and 100.

Let's take an example : 
  name: "Markdown",  ---> This means that I evaluate my knwoledgein the Markdown skill
  
  knowledge: 100     ---> at 100%

## Languages

Talking about Human languages there, not computer things, for once.
List of objects that represents all the languages that you understand or speak.
Like the skills section, objects are simple as "type" (string) and "level" (int)
Type is what language do you want to show, and level is how good you are in this type of language.
Level can only take 5 values, between 0 and 4

Let's take an example :
  type: "Esperanto",
  level: "0"

## End

You're all set, build the App, push it to any server, that you own ofc, and flex as much as you want to.
GG ;)

# OnlineResume

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
