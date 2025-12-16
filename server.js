const express = require('express')
const fs = require('fs')
const createCard = require('./helpers/createCard.js')

let overviewHTML = fs.readFileSync('./templates/overview.html', 'utf-8')
let cardHTML = fs.readFileSync('./templates/card.html', 'utf-8')

const cardsData = JSON.parse (fs.readFileSync('./dev-data/data.json', 'utf-8'))

const app = express();

app.get('/', (req,res)=>{
    res.status(200).send("Sunucuya hosgeldiniz")
})

app.get('/overview',(req,res)=>{

    const readyCards = cardsData.map((item)=>createCard(cardHTML, item)).join('')

    overviewHTML = overviewHTML.replace('{%PRODUCT_CARDS%}', readyCards)


    res.status(200).send(overviewHTML)
})


app.listen(4000, ()=>console.log('\nSUNUCU CALISMAYA BASLADI.\n'))

