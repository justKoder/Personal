const nav = document.getElementById("nav");
const ham = document.getElementById("ham");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.toggle("mobileNav");
    l1.classList.toggle("line1");
    l2.classList.toggle("line2");
    l3.classList.toggle("line3");
  });
});

ham.addEventListener("click", function () {
  nav.classList.toggle("mobileNav");
  l1.classList.toggle("line1");
  l2.classList.toggle("line2");
  l3.classList.toggle("line3");
});

// Banner

const banner = document.querySelector(".banner");
let bannerImages = document.querySelectorAll(".bannerImage");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const interval = 10000

let index = 0

const firstClone = bannerImages[0].cloneNode(true);
const lastClone = bannerImages[bannerImages.length - 1].cloneNode(true)

firstClone.id = "first-clone"
lastClone.id = "last-clone"

// banner.append(firstClone)
banner.append(firstClone)
banner.prepend(lastClone)

const bannerWidth = bannerImages[index].clientWidth;

bannerImages[index].scrollIntoView()

const rightSlide = () => {
    if (index < bannerImages.length) {
      index++
      if (index == bannerImages.length ) {
        banner.style.scrollBehavior = "auto";
        lastClone.scrollIntoView()
      }
      else {
        bannerImages[index].scrollIntoView()
      }
      banner.style.scrollBehavior = "smooth";
    }
    else {
      index = 0,
        bannerImages[0].scrollIntoView()
      }
    if (index == bannerImages.length ) {
      bannerImages[index-1].style.transition = "1s"
    }
}
const leftSlide = () => {
  // bannerImages[0].scrollIntoView()
  // if (index == 0) {
  //   bannerImages[bannerImages.length -1].scrollIntoView()
  // }
    if (1 <= index && index <= bannerImages.length) {
      index--
      banner.style.scrollBehavior = "smooth";
      bannerImages[index].scrollIntoView()
    }
    else {
      index = bannerImages.length - 1,
        banner.style.scrollBehavior = "auto";
        bannerImages[bannerImages.length-1].scrollIntoView()
      }
}

// setInterval(() => {
//   rightSlide()
// }, interval)

nextBtn.addEventListener("click", () => {
  rightSlide()
})
prevBtn.addEventListener("click", () => {
  leftSlide()
})
// banner.addEventListener("scroll", () => {
//   console.log("transition end")
//   bannerImages = document.querySelectorAll(".bannerImage");
//   // console.log(bannerImages.length)
//   banner.style.scrollBehavior = "auto";
//   if (index === bannerImages.length+1 ) {
//     console.log("Equal", index)
//     // banner.style.scrollBehavior = "auto";
//     index = 1,
//     bannerImages[0].scrollIntoView()
//   }
//   // if (bannerImages[index].id === "first-clone") {
//   //   banner.style.scrollBehavior = "auto";
//   //   index = 1,
//   //   bannerImages[0].scrollIntoView()
//   // }
//   else {
//     banner.style.scrollBehavior = "smooth";
//   }

// })

// startSlide();



































// const banner = document.querySelector(".banner");
// const arroBtns = document.querySelectorAll("abt");
// const leftbtn = document.getElementById("lt");
// const rightbtn = document.getElementById("rt");
// const bannerImages = [document.querySelectorAll(".bannerImage")];
// const interval = 4000

// banner.style.transition = "none";

// let lastClone = bannerImages[0][0].cloneNode(true)
// let firstClone = bannerImages[0][bannerImages.length-1].cloneNode(true)

// console.log(lastClone)
// console.log(firstClone)

// firstClone.id = "first-clone"
// lastClone.id = "last-clone"


// if (bannerImages[0].length <= 1) {
//   leftbtn.style.opacity = 0;
//   rightbtn.style.opacity = 0;
// }
// else {
//  leftbtn.style.opacity = 0.5;
//   rightbtn.style.opacity = 0.5;
// }

// console.log("This is image", bannerImages[0][1])
// console.log(arroBtns[0])
// // setInterval(() => {
// //   bannerImages[0][3].scrollIntoView()
// // }, 4000)

// a = 1

// rightbtn.addEventListener("click", function () {
//   console.log("Right button clicked");
  
//   if (a < bannerImages[0].length) {
//     console.log("Smaller")
//     bannerImages[0][a].scrollIntoView()
//     a++
//   }
//   else {
//     bannerImages[0][0].scrollIntoView()
//     a = 1
//     console.log("Greater")
//   }
// })

// banner.addEventListener("transitioned", () => {

// })

// if (a < bannerImages[0].length) {
//   rightbtn.addEventListener("click", (e) => {
//     bannerImages[0][a].scrollIntoView()
//     a++;
//   })
  
// }else {
//     a=0
//   }
// bannerImages.forEach((banner,i) => {
//   setInterval(() => {
//     console.log(1)
//     console.log(banner.scrollLeft)
//   }, interval);
// })
