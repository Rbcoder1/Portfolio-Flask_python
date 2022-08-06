

const dark = document.getElementById("btn-dark/white");
const section = document.getElementById("con2");
const section1 = document.getElementById("con1");
const body = document.getElementById("body")
const head = document.getElementById("con")

// give typing animation to websit
try {
    if (!section1) {
        console.log("this is another section sorry ")
    }
    else {
        // console.log("start")
        var typed = new Typed(".typing", {
            strings: ["Web Developer", "Android Developer", "Python Developer", "Full Stack Developer", "Blockchain Engineer"],
            typeSpeed: 90,
            BackSpeed: 30,
            loop: true
        })
    }
} catch (error) {
    console.log(error)
}



// dark mode logic

dark.addEventListener('click', () => {
    if (dark.value == "0") {
        darkMode();
        console.log(dark.value)
    }
    else {
        whiteMode();
        console.log(dark.value)
    }
})


const darkMode = async () => {
    dark.value = 1;
    await body.classList.add("background")
    await head.classList.add("background_head")
}
const whiteMode = () => {
    dark.value = 0;
    body.style.color = "black";
    body.style.background = "rgb(194, 216, 236)";
    head.style.background = "rgb(181 203 235)";
}

const triggerTabList = document.querySelectorAll('#myTab button')
triggerTabList.forEach(triggerEl => {
  const tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', event => {
    event.preventDefault()
    tabTrigger.show()
  })
})

const someTabTriggerEl = document.querySelector('#someTabTrigger')
const tab = new bootstrap.Tab(someTabTriggerEl)

tab.show()