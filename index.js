function getFirstSelector(selector){
  return document.querySelector(selector);
}
function nestedTarget(){
  return document.getElementById('app').querySelector('div div div div div')
}
function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    var myNumber = lis[i].innerHTML
    myNumber.parseInt()
    lis[i].innerHTML = (myNumber + n).toString()
  }
}
function deepestChild(){

}
