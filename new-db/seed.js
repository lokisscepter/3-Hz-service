const fs = require('fs')
const faker = require('faker')
const argv = require('yargs')

const randomNum = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const lines = argv.lines || 100
const prodStream = fs.createWriteStream(./products.csv)
const sizeStream = fs.createWriteStream(./size.csv)
const colorStream = fs.createWriteStream(./color.csv)
const cJoinStream = fs.createWriteStream(./color_joins.csv)
const sJoinStream = fs.createWriteStream(./size_joins.csv)

const createProduct = () => {
  const name = faker.commerce.productName();
  const avg_rating = randomNum(1, 5);
  const num_reviews = randomNum(1, 2000);
  const price = faker.commerce.price(20, 200, 2, $)

  return `${name},${avg_rating},${num_reviews},${price}\n`
}

const createColors = () => {
  let colors = [orange, white, tan, violet, plum, gold, grey, indigo, silver, purple]
  let colorOpt = ''
  for (var i = 0; i < colors.length; i++) {
    let priceDiff = randomNum(5, 50)
    colorOpt.push(`${colors[i]}, ${priceDiff}`)
  }
  return colorOpt
}

const sizes = '5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15'

const color_join_table = () => {
  let prods = 1
  let table = ''
  while (prods < 101) {
    let colorOpt = randomNum(1, 5);
    for (var i = 1; i < colorOpt.length; i++) {
      let color_id = randomNum(1, 10);
      let prod_id = prods
    }
    table += `${color_id},${prod_id}\n`
  }
  return table
}

const size_join_table = () => {
  let prods = 1
  let table = ''
  while (prods < 101) {
    let sizeOpt = randomNum(1, 5);
    for (var i = 1; i < sizeOpt.length; i++) {
      let size_id = randomNum(1, 10);
      let prod_id = prods
      table += `${size_id},${prod_id}\n`
    }
    prods++
  }
  return table
}

const writeProduct =