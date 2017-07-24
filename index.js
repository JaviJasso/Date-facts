const chalk = require("chalk")
const moment = require("moment")

let now = moment()
let startDay = moment().startOf("day")

// Monday, July 24, 2017 4:10 PM
console.log(chalk.blue(`${moment().format("LLLL")}`))

console.log(chalk.red(`${moment().format("DDDD")}`))

console.log(chalk.yellow(`${parseInt((now - startDay) / 1000)}`))

if (moment().isDST() === true) {
  console.log(`It ` + chalk.red(`is`) + ` during DayLight Savings Time`)
} else {
  console.log("It is not")
}

if (moment().isLeapYear() === true) {
  console.log(`It is  a leap year`)
} else {
  console.log(`It ` + chalk.green(`is not`) + ` a leap year`)
}

//log(chalk.blue("Hello") + "World" + chalk.red("!"))
