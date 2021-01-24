export function erase () {
  const heroesPlace = document.querySelector('.all-heroes');
  heroesPlace.textContent = ''
}

export function eraseBtns () {
  const heroesPlace = document.querySelector('.all-heroes');
  const buttonPlace = document.querySelector('.button-place');
  if (heroesPlace.contains(allHeroesItem)) {
    buttonPlace.innerHTML = ''
  }
}
