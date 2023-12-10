let products = document.querySelectorAll(".product")
let search = document.querySelector("input[type='text']")
let maxPrice = document.querySelector("#maxprice")
let minPrice = document.querySelector("#minprice")
let btn = document.querySelector("button[type='button']")

btn.addEventListener("click", function () {
    products.forEach(function (i) {
        i.classList.remove("d-none")
        let name = i.childNodes[3].childNodes[1]
        if (!(name.textContent.toLowerCase().includes(search.value.toLowerCase()))) {
            i.classList.add("d-none")
        }
        if (search.value == "") {
            i.classList.remove("d-none")
        }

        maxValue = parseInt(maxPrice.value)
        if (maxValue == ""){maxValue = Infinity}
        let maxNum = i.childNodes[3].childNodes[3]
        let maxprice = maxNum.textContent.replace("$", "")
        maxprice = parseInt(maxprice)
        if (maxprice > maxValue) {
            i.classList.add("d-none")
        }

        minValue = parseInt(minPrice.value)
        if (minValue == ""){minValue = 0}
        let minNum = i.childNodes[3].childNodes[3]
        let minprice = minNum.textContent.replace("$", "")
        minprice = parseInt(minprice)
        if (minprice < minValue) {
            i.classList.add("d-none")
        }

    })
})