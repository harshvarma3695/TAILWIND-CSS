let signBtn = document.querySelector("#signbtn");
let popup = document.querySelector("#popup");
let overlay = document.querySelector("#overlay");
let closeBtn = document.querySelector("#closeBtn");

signBtn.addEventListener("click", () => {
  popup.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", closePopup);

function closePopup() {
  popup.classList.add("translate-x-full");
  overlay.classList.add("hidden");
}


  
const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    const icon = q.querySelector(".icon");

    // agar ye already open hai → close karo
    if (!answer.classList.contains("hidden")) {
      answer.classList.add("hidden");
      icon.textContent = "+";
      return;
    }

    // sab close karo (baaki questions)
    document.querySelectorAll(".answer").forEach(ans => {
      ans.classList.add("hidden");
    });

    document.querySelectorAll(".icon").forEach(ic => {
      ic.textContent = "+";
    });

    // current ko open karo
    answer.classList.remove("hidden");
    icon.textContent = "×";
  });
});

let image = document.querySelector("#image");
let popup1 = document.querySelector("#popup1");
let overlay1 = document.querySelector("#overlay1");
let closeBtn1 = document.querySelector("#closeBtn1");

image.addEventListener("click", () => {
  overlay1.classList.remove("hidden");
  popup1.classList.remove("scale-0", "opacity-0");
  popup1.classList.add("scale-100", "opacity-100");
});

closeBtn1.addEventListener("click", closePopup1);
overlay1.addEventListener("click", closePopup1);

function closePopup1() {
  popup1.classList.add("scale-0", "opacity-0");
  popup1.classList.remove("scale-100", "opacity-100");
  overlay1.classList.add("hidden");
}

let image2 = document.querySelector("#image2");
let popup2 = document.querySelector("#popup2");
let overlay2= document.querySelector("#overlay2");
let closeBtn2 = document.querySelector("#closeBtn2");

image2.addEventListener("click", () => {
  overlay2.classList.remove("hidden");
  popup2.classList.remove("scale-0", "opacity-0");
  popup2.classList.add("scale-100", "opacity-100");
});

closeBtn2.addEventListener("click", closePopup2);
overlay2.addEventListener("click", closePopup2);

function closePopup2() {
  popup2.classList.add("scale-0", "opacity-0");
  popup2.classList.remove("scale-100", "opacity-100");
  overlay2.classList.add("hidden");
}
let image3 = document.querySelector("#image3");
let popup3 = document.querySelector("#popup3");
let overlay3 = document.querySelector("#overlay3");
let closeBtn3 = document.querySelector("#closeBtn3");

image3.addEventListener("click", () => {
  overlay3.classList.remove("hidden");
  popup3.classList.remove("scale-0", "opacity-0");
  popup3.classList.add("scale-100", "opacity-100");
});

closeBtn3.addEventListener("click", closePopup3);
overlay3.addEventListener("click", closePopup3);

function closePopup3() {
  popup3.classList.add("scale-0", "opacity-0");
  popup3.classList.remove("scale-100", "opacity-100");
  overlay3.classList.add("hidden");
}
let image4= document.querySelector("#image4");
let popup4= document.querySelector("#popup4");
let overlay4= document.querySelector("#overlay4");
let closeBtn4 = document.querySelector("#closeBtn4");

image4.addEventListener("click", () => {
  overlay4.classList.remove("hidden");
  popup4.classList.remove("scale-0", "opacity-0");
  popup4.classList.add("scale-100", "opacity-100");
});

closeBtn4.addEventListener("click", closePopup4);
overlay4.addEventListener("click", closePopup4);

function closePopup4() {
  popup4.classList.add("scale-0", "opacity-0");
  popup4.classList.remove("scale-100", "opacity-100");
  overlay4.classList.add("hidden");
}
let image5 = document.querySelector("#image5");
let popup5 = document.querySelector("#popup5");
let overlay5 = document.querySelector("#overlay5");
let closeBtn5 = document.querySelector("#closeBtn5");

image5.addEventListener("click", () => {
  overlay5.classList.remove("hidden");
  popup5.classList.remove("scale-0", "opacity-0");
  popup5.classList.add("scale-100", "opacity-100");
});

closeBtn5.addEventListener("click", closePopup5);
overlay5.addEventListener("click", closePopup5);

function closePopup5() {
  popup5.classList.add("scale-0", "opacity-0");
  popup5.classList.remove("scale-100", "opacity-100");
  overlay5.classList.add("hidden");
}


