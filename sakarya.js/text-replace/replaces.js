// * Replace Method
String.prototype.replaces = function (beforeArr=[],afterArr=[]) {
    if (typeof beforeArr == 'string'){
        beforeArr = beforeArr.toString().split("")
    }
    if (typeof afterArr == 'string'){
        afterArr = afterArr.toString().split("")
    }
    if(beforeArr.length && afterArr.length){
        beforeArr.forEach((element,index) => {
            if(afterArr[index]){
                this.replace(/-+/g, afterArr[index])
            }
        });
        return this.toString()
    }else{
        return this.toString()
    }
  }