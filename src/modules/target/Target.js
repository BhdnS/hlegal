import data from './data';

export default class Target {
  constructor() {
    this.text = document.querySelector('.target_text');
    this.title = document.querySelector('.target_title');
    this.btnList = document.querySelector('.target_list');
    this.buttons = document.querySelectorAll('.target_btn');
  }

  clickBtn() {
    this.btnList.addEventListener('click', (e) => {
      const targetBtn = data.find((item) => e.target.classList.contains(item.btnClass));

      if (e.target.classList.contains(targetBtn.btnClass)) {
        this.buttons.forEach((elem) => {
          elem.classList.remove('target_btn-active');
        });
      }

      e.target.classList.add('target_btn-active');
      this.text.textContent = targetBtn.text;
      this.title.textContent = targetBtn.title;
    });
  }
}
