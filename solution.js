function rot13(str) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  console.log(alphabets.length)

  var newStr = "";
  for(let i = 0; i < str.length; i++ ){
    const index = alphabets.indexOf(str[i]);
    if(index === -1){
      newStr += str[i];
    } else {
      let newIndex = (index + 13) % 26;
      newStr += alphabets[newIndex];
    }
  }
  return newStr;
}

console.log(rot13("SERR PBQR PNZC"));
