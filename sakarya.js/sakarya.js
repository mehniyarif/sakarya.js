// * TitleCase Method
String.prototype.toTitleCase = function (sensitive) {
    let ignores = [" "]
    let spaceList = [-1];
    let splitText = this.toString().trim().split("");
    
    let sensitive_arr = sensitive && Array.isArray(sensitive) ? sensitive : ['number','string'].includes(typeof sensitive) ? (sensitive.toString().split("")) : []
   
    if(sensitive_arr.length){
      ignores = ignores.concat(sensitive_arr)
    }
  
    let tentative;
    splitText.forEach((element, index) => {
      if (ignores.includes(element)) {
        tentative = index;
      }
      // eğer karakter boş değilse ve önceki indexi boş ve kayıtlı değer var ise kayıtlı değeri liste ekle ve değeri boşalt
      if (!ignores.includes(element) && tentative && tentative + 1 == index) {
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
  };// * PascalCase Method
String.prototype.toPascalCase = function (sensitive) {
    let ignores = ["-","_"," "]
    let spaceList = [-1];
    let splitText = this.toString().split("");

    
    let sensitive_arr = sensitive && Array.isArray(sensitive) ? sensitive : ['number','string'].includes(typeof sensitive) ? (sensitive.toString().split("")) : []
    if(sensitive_arr.length){
      ignores = ignores.concat(sensitive_arr)
    }
    
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
  }// * Replace Method
String.prototype.replaces = function (beforeArr=[],afterArr=[]) {
    let text = this.toString()
    if (typeof beforeArr == 'string'){
        beforeArr = beforeArr.toString().split("")
    }
    if (typeof afterArr == 'string'){
        afterArr = afterArr.toString().split("")
    }
    if(beforeArr.length && afterArr.length){
        beforeArr.forEach( async function(element,index) {
            if(afterArr[index]){
                await text.toUpperCase()
            }
        });
        return text
    }else{
        return text
    }
  }