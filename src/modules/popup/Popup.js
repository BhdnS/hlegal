export default class Popup {
  constructor() {
    this.btn = document.querySelector('#btn');
    this.mask = document.querySelector('.mask');
    this.close = document.querySelector('#close');
    this.popup = document.querySelector('.popup');
    this.body = document.querySelector('body');
  }

  openPopup() {
    this.btn.addEventListener('click', () => {
      this.body.classList.add('hidden');
      this.mask.classList.remove('none');
      this.popup.classList.remove('none');
      this.mask.classList.add('block');
      this.popup.classList.add('block');
    });
  }

  closePopup() {
    this.close.addEventListener('click', () => {
      this.body.classList.remove('hidden');
      this.mask.classList.remove('block');
      this.popup.classList.remove('block');
      this.mask.classList.add('none');
      this.popup.classList.add('none');
    });
  }
}
