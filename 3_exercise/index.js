let currentHour = new Date()


const headElement = document.getElementById("head_tag")

if (parseInt(currentHour.getHours()) < 12) {
    console.log("Good Moarning..")
    headElement.innerHTML = currentHour.getHours()
} else {
    console.log("Good Afternoon")
    headElement.innerHTML = currentHour.getHours()
}






// console.log(currentHour, "current hour is....")