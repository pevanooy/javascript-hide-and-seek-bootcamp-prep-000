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
    myNumber = myNumber * 1
    lis[i].innerHTML = (myNumber + n).toString()
  }
}
function deepestChild(){
  //Starting div
  var myDiv = document.getElementById('grand-node')
  while (myDiv[0].children){
      myDiv = myDiv[0].children
      
  }
  return myDiv
}
