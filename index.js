

class Formatter {

  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let splitArr = str.split(' ');
    let res = splitArr.map((word) => {
      if (arr.includes(word)) {
        return word;
      } else {
        return this.capitalize(word);
      }
    })
    res[0] = this.capitalize(res[0]);
    return res.join(' ');
  }

}