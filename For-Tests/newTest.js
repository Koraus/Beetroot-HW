
function objConstructor (firsName, lastName ){
_this.firsName = firsName;
_this.lastName = lastName;


 return _this;
}


function isTen (a){
    if (a === 10){
        return true;
    }else {return false}
}

console.log(isTen(9))
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Не удалось загрузить скрипт ${src}`));
  
    document.head.append(script);
  }