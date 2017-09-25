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
  var myCurDiv
  var Cld = []
  Cld = myDiv.children
    while (Cld.length){
      myDiv = Cld[0]
      myCurDiv = myDiv
      Cld = myDiv.children
      if (!Cld.length)  return myCurDiv
  }
}
