// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.
//KATA1
const activeusers =users.filter(user => user.isActive === true)

printKata(1, activeusers)

//KATA2
const emailadresse =users.map(user =>user.email)

printKata(2, emailadresse)

//KAtA3

const company =users.some(users =>users.company==="OVATION")
printKata(3, company)

//KATA 4
const userage = users.find(users =>users.age > 38)
printKata(4, userage)
 //KATA 5
  const userageactive =  users
  .filter(user => user.isActive===true)
  .find(users =>users.age > 38)
  
  printKata(5, userageactive)

  //KATA6
  const userbalance = users
  .filter(user=>user.company==="ZENCO")
  .map(user=>user.balance)
  printKata(6, userbalance)

  //KATA7

  const useragewithfugiat = users
  .filter(user=>user.tags.includes("fugiat"))
  .map(user=>user.age)


  printKata(7, useragewithfugiat)

































function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}