var algorithm1 = document.getElementbyId('list1')
var algorithm2 = document.getElementById('list2')
var word = document.getElementById('word')

function palindrome(str) {
    let onlyLetters = str.replace(/[`~ !@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    onlyLetters = onlyLetters.toLowerCase().split("");
    for (let i = 0; i < onlyLetters.length - 1 / 2; i++) {
      if (onlyLetters[i] !== onlyLetters[onlyLetters.length - i - 1]) {
      return false;
      break;
    }
  }
  return true;
}