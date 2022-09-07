# Frontend Mentor - Calculator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### Screenshot

![Screenshot of the Adive genrator app app coding challenge](./screenshot.png)

### Links

- Solution URL: [https://github.com/clementstorne/FrontendMentor-advice-generator-app](https://github.com/clementstorne/FrontendMentor-advice-generator-app)
- Live Site URL: [https://clementstorne.github.io/FrontendMentor-advice-generator-app/](https://clementstorne.github.io/FrontendMentor-advice-generator-app/)

## My process

### Built with

- HTML
- Sass
- Flexbox
- JavaScript

### What I learned

I learned how to pick a random integer out of an interval.

```js
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
```

## Author

- Github - [Clément Storne](https://github.com/clementstorne)
- Frontend Mentor - [@clementstorne](https://www.frontendmentor.io/profile/clementstorne)
- Twitter - [@clementstorne](https://twitter.com/clementstorne)
