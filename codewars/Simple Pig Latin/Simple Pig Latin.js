function pigIt(str) {
    return str
      .split(' ')
      .map((word) => {
        if (word.match(/^[a-zA-Z]+$/)) {
          return word.slice(1) + word[0] + 'ay'; 
        } else {
          return word; 
        }
      })
      .join(' ');
  }