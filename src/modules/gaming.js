import {
  heroesList
} from './heroesList';

import {
  erase,
  eraseBtns
} from './eraser'

const heroesPlace = document.querySelector('.all-heroes');

export function gamingAll () {
  let heroesItem = document.querySelector('.all-heroes__item');
  if (heroesItem) {
    erase ();
  }
  else {
    heroesList.forEach(element => {
      let createDiv = document.createElement('div');
      let createImage = document.createElement('img');
      let createName = document.createElement('p');

      createDiv.classList.add('all-heroes__item');
      createImage.src = element.image;
      createImage.classList.add('all-heroes__image')
      createName.textContent = element.name;
      createName.classList.add('all-heroes__name')

      createDiv.append(createImage);
      createDiv.append(createName);
      heroesPlace.append(createDiv);
    });
  }
  eraseBtns ()
}

export function gamingPolina () {
  let heroesItem = document.querySelector('.all-heroes__item');
  if (heroesItem) {
    erase ();
  }
  else {
    heroesList.forEach(element => {
      if (element.gamers.polina === false) {
        let createDiv = document.createElement('div');
        let createImage = document.createElement('img');
        let createName = document.createElement('p');

        createDiv.classList.add('all-heroes__item');
        createImage.src = element.image;
        createImage.classList.add('all-heroes__image')
        createName.textContent = element.name;
        createName.classList.add('all-heroes__name')

        createDiv.append(createImage);
        createDiv.append(createName);
        heroesPlace.append(createDiv);
      }
    })
  }
  eraseBtns ()
}

export function gamingEgor () {
  let heroesItem = document.querySelector('.all-heroes__item');
  if (heroesItem) {
    erase ();
  }
  else {
    heroesList.forEach(element => {
      if (element.gamers.egor === false) {
        let createDiv = document.createElement('div');
        let createImage = document.createElement('img');
        let createName = document.createElement('p');

        createDiv.classList.add('all-heroes__item');
        createImage.src = element.image;
        createImage.classList.add('all-heroes__image')
        createName.textContent = element.name;
        createName.classList.add('all-heroes__name')

        createDiv.append(createImage);
        createDiv.append(createName);
        heroesPlace.append(createDiv);
      }
    })
  }
  eraseBtns ();
}
