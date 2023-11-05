export default class Form {
  constructor() {
    this.btn = document.querySelector('#btnForm');
    this.userName = document.querySelector('#userName');
    this.textarea = document.querySelector('#textarea');
    this.userTel = document.querySelector('#userTel');
    this.userEmail = document.querySelector('#userEmail');
    this.emailMessage = document.querySelector('#emailMessage');
  }

  clickBtn() {
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }

  validationUserName() {
    this.userName.addEventListener('input', () => {
      const inputValue = this.userName.value.trim();
      const filterValue = inputValue.replace(/[^A-Za-z\s]/g, '');
      const upperCaseValue = filterValue.charAt(0).toUpperCase() + inputValue.slice(1);
      this.userName.value = upperCaseValue;
    });
  }

  validationTextarea() {
    this.textarea.addEventListener('input', () => {
      const textareaValue = this.textarea.value;
      const upperCaseValue = textareaValue.charAt(0).toUpperCase() + textareaValue.slice(1);
      this.textarea.value = upperCaseValue;
    });
  }

  validationUserTel() {
    this.userTel.addEventListener('input', () => {
      const inputValue = this.userTel.value;
      const inputFilter = inputValue.replace(/[^0-9]/g, '');
      if (inputFilter.length > 10) {
        this.userTel.value = inputFilter.slice(0, 10);
      } else {
        this.userTel.value = inputFilter;
      }
    });
  }

  validationUserEmail() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.userEmail.addEventListener('input', () => {
      const userValue = this.userEmail.value;
      if (emailPattern.test(userValue)) {
        this.emailMessage.textContent = '';
      } else {
        this.emailMessage.textContent = 'Is not valid email';
      }
    });
  }
}
