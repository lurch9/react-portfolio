export function validateName(name) {
    return !(name.length === 0);
  }
  
  export function validateEmail(email) {
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return regex.test(String(email));
  }
  
  export function validateMessage(message) {
    return !(message.length === 0);
  }