# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart


### Screenshot

(./images/sneakers.png)

### Links

- Solution URL: (https://github.com/Petitesha/SCA-project1.git)
- Live Site URL: (https://sca-project1.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I was able to learn how to write my html markup and css accordingly and based on their tags or class while writing this project, and I was able to use the hamburger style for my navigation.I also learnt how to use flex basis. I still have more to learn in css. I used some sematics on html and was able to implement javascript to make the project dynamic for example :

let cart = 0;

for (let i = 0; i < smallImage.length; i++) {
  smallImage[i].addEventListener('click', function () {
    bigImage.src = smallImage[i].src;
  });
}
### Continued development
I would continu to learn more and get familiar with javaScript so as to use the DRY (don't repeat yourself) rule.

### Useful resources

Google Fonts - This helped me with the various fonts used in my project.
Online web fonts - This also helped with getting fonts that are not in google font.


## Author

Twitter - @Petit_esha96
Github - @Petitesha

## Acknowledgments

Firstly,I would like to thank God and my parents.I would like to thank sheCode Africa for providing this great opportunity to achieve an ambition in the Tech industry.I would also like to share my sincere appreciation with my humble MENTOR for putting me through during my tough times and for encouraging and insipiring me to get better.I would also like to appreciate my colleagues for helping me with some ideas and sharing a better way to do my project.
