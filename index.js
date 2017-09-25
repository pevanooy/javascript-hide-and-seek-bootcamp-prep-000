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
  var noMoreChildren = 0
  var myChildren = []
  while (noMoreChildren == 0 ){
      var myChildren = myDiv[0].children
      if (myChildren.length == 0) {
        return myDiv
      } else {
        myDiv = myChildren.children[0]
      }
  }
}
