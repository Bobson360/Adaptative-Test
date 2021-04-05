var doc = document
var count = 0
var clicked = true
var point = 0


var bntAdd = document.getElementById('btnAdd')
var bntDec = document.getElementById('btnDec')
var divRand = document.getElementById('randomElement')
const btnAdd100 = divRand.querySelector("#btnAdd100");


doc.getElementById("btnAdd").addEventListener("click", function () {
    count++
    console.log(count)
    changeValue()
});

doc.getElementById("btnDec").addEventListener("click", function () {
    count--
    console.log(count)
    changeValue()
});

function loose() {
    setTimeout(function () {
        if (!clicked) {
            if(doc.getElementById('btnClear'))
                removeBtnClear()
            
            if(doc.getElementById('btnAddValue'))
                removeBtnAddValue()

            divRand.insertAdjacentHTML('beforeend', '<h1 class="loose"> You Loose!</h1>')
            bntAdd.setAttribute("disabled", "disabled")
            bntDec.setAttribute("disabled", "disabled")
            // doc.getElementsByTagName('button').disabled = true
            // document.querySelector('button').disabled = true;
        }
    }, 1500)
}


function changeValue() {
    doc.getElementById('count').innerHTML = count
}

function insertBtn1() {
    pos = randPositionButton()
    clicked = false
    divRand.insertAdjacentHTML  (
                                    'beforeend', 
                                    `<button id="btnClear" onclick="btnClear()" 
                                    style="position: relative; margin-top: ${pos.py}px; margin-left: ${pos.px}px;" 
                                    class="button red">CLEAR</button>`
                                )

    setTimeout(function () {
        // removeBtnClear()
    }, 2000)

    loose()
}

function insertBtn2() {
    pos = randPositionButton()
    let newValueToAdd = getRandomInt(20, 120)
    clicked = false
    divRand.insertAdjacentHTML  (
                                    'beforeend', 
                                    `<button id="btnAddValue" onclick="btnAddValue(${newValueToAdd})" 
                                    style="position: relative; margin-top: ${pos.py}px; margin-left: ${pos.px}px;" 
                                    class="button green">ADD ${newValueToAdd}</button>`
                                )
    setTimeout(function () {
        // removeBtnAddValue()
    }, 2000)

    loose()
}

function btnAddValue(newValueToAdd) {
    count += newValueToAdd
    console.log(count)
    changeValue()
    btnTimeOuts()
    clicked = true
    changePoints()
    removeBtnAddValue()

}

function btnClear() {
    count = 00
    console.log(count)
    changeValue()
    btnTimeOuts()
    clicked = true
    changePoints()
    removeBtnClear()

}

function removeBtnClear() {
    document.getElementById('btnClear').remove()
}

function removeBtnAddValue() {
    document.getElementById('btnAddValue').remove()
}

function btnTimeOuts() {
    let ct = getRandomInt(1, 2)
    console.log(`insertBtn${ct}()`)
    setTimeout(function () {
        eval(`insertBtn${ct}()`),
            console.log(doc.getElementById("btnClear"))
    }, Math.random() * (3000 - 1000) + 1000)
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// if (doc.getElementById('btnAddValue') == null) {
//     setTimeout(function () {
//     }, Math.random() * (5000 - 3000) + 3000)
// }
btnTimeOuts()

function changePoints(){
    point++
    doc.getElementById('pts').innerHTML = point
}

function randPositionButton(){
    let x = getRandomInt(400, 100)
    let y = getRandomInt(200, 50)

    return {px: x, py: y}
}

console.log(`Position x: ${randPositionButton().px}, Position y: ${randPositionButton().py}`)