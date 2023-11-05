export default class Burger {
  constructor() {
    this.mask = document.querySelector('#mask');
    this.burgerNav = document.querySelector('#burgerNav');
    this.burger = document.querySelector('#burger');
    this.body = document.querySelector('body');
    this.burgerClose = document.querySelector('#burgerClose');
  }

  openBurger() {
    this.burger.addEventListener('click', () => {
      this.mask.classList.remove('none');
      this.burgerNav.classList.add('visible');
      this.body.classList.add('hidden');
      this.burger.classList.add('none');
    });
  }

  closeBurger() {
    this.burgerClose.addEventListener('click', () => {
      this.mask.classList.add('none');
      this.burgerNav.classList.remove('visible');
      this.body.classList.remove('hidden');
      this.burger.classList.remove('none');
    });
  }
}
