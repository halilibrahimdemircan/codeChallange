tbody = document.getElementsByTagName("tbody")
// console.log(tbody[0].children[0])
tr1 = tbody[0].children[0]

array = ['C1234,John, Doe, London, Full-Stack',
'C2345 - Jane Doe, London, Data-Science',
'C2346 - Mary Ann, Paris, AWS-Devops',
'C2347 - Adam Smith, Texas, AWS-Devops',
'C2444 - Michael Great, Arizona, Full-Stack',
'C2555 - William Cash, Manchester, Data-Science',
'C2455 - Patrick Jane, Madrid, Full-Stack']

let sarray = array.slice(",")
// console.log(sarray)
 console.log(tbody.innerHTML         )
for (let index = 0; index < array.length; index++) {
    tbody[index].innerHTML += `<tr>${array[index]}</tr>` ;
   
    
    
}
// text = tr1.innerText


// append(array[0])

