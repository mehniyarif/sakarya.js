// * TitleCase Method
String.prototype.toTitleCase = function () {
  let spaceList = [-1];
  let splitText = this.toString().split("");
  let tentative;
  splitText.forEach((element, index) => {
    if (element == " ") {
      tentative = index;
    }
    // eğer karakter boş değilse ve önceki indexi boş ve kayıtlı değer var ise kayıtlı değeri liste ekle ve değeri boşalt
    if (element != " " && tentative && tentative + 1 == index) {
      spaceList.push(tentative);
      tentative = null;
    }
  });

  // yukarda liste eklediğimiz indexleri uppor yaptık dönderdik
  let titleCaseText = splitText.map((element, index) => {
    if (spaceList.includes(index - 1)) {
      return element.toUpperCase();
    }
    return element;
  });

  return titleCaseText.join("");
};

// * PascalCase Method
String.prototype.toPascalCase = function () {
  let ignores = ["-","_"," "]
  let spaceList = [-1];
  let splitText = this.toString().split("");
  let tentative;
  splitText.forEach((element, index) => {
    if (ignores.includes(element)) {
      tentative = index;
    }
    // eğer karakter hariç tutulan bir karakter değilse, önceki indexi hariç tutulan bir karakterse ve kayıtlı değer var ise kayıtlı değeri liste ekle ve değeri boşalt
    if (!ignores.includes(element) && tentative && tentative + 1 == index) {
      spaceList.push(tentative);
      tentative = null;
    }
  });

  // yukarda liste eklediğimiz indexleri upper yaptık dönderdik
  let titleCaseText = splitText.map((element, index) => {
    if (spaceList.includes(index - 1)) {
      return element.toUpperCase();
    }
    return element;
  });
  let joinText = titleCaseText.join("")
  return joinText.replaceAll(/[- _]/g,'');
}
