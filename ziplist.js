const list1 = ["a", "b", "c"];
const list2 = [1, 2, 3];

function zipList(list1, list2)  {
  let newList = [];
  for (let item in list1) {
    newList.push(list1[item]);
    newList.push(list2[item]);
  }
  return newList;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}


console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));