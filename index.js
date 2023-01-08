// const cards = [...document.querySelectorAll(".carousel__card")];
// const track = document.querySelector(".carousel__track");

// const btns = [...document.querySelectorAll(".carousel__btn")];
// const nextCardBtn = document.querySelector(".carousel__btn-right");
// const prevCardBtn = document.querySelector(".carousel__btn-left");

// const originalStartingCard = document.querySelector(".track__start-original");
// const originalEndCard = document.querySelector(".track__end-original");

// let autoSlide = true;
// let currentCard = document.querySelector(".carousel__card-current");
// let nextCard = currentCard.nextElementSibling;
// const cardWidth = currentCard.getBoundingClientRect().width;

// // PUSH THE STACKED CARDS TO THE LEFT ACCORDING TO THEIR WIDTH
// track.style.transition = cards.map((card, index) => {
//   card.style.left = `${cardWidth * index}px`;
// });

// // SETS CAROUSEL TO START ON THE FIRST ORIGINAL CARD
// // RATHER THAN THE CLONE WHICH HAS AN INDEX OF 0
// track.style.transform = `translateX(-${cardWidth}px)`;

// const updateCurrentCard = (theCurrentCard, updatedCurrentCard) => {
//   if (!updatedCurrentCard) return;
//   theCurrentCard.classList.remove("carousel__card-current");
//   updatedCurrentCard.classList.add("carousel__card-current");
//   currentCard = updatedCurrentCard;
// };

// const removeEventListeners = (e) => {
//   // REMOVE EVENT LISTENERS TO PREVENT THE USER FROM THROWING
//   // ERRORS FROM RAPID CLICKING
//   nextCardBtn.removeEventListener("click", moveTrack);
//   prevCardBtn.removeEventListener("click", moveTrack);
// };

// const transitionsOn = (e) => {
//   // TURN ON TRANSITIONS
//   track.style.transitionDuration = "1s";
//   track.style.transitionTimingFunction = "ease-in";
// };

// const transitionsOff = (e) => {
//   // TURN TRANSITIONS TO NONE TO MAKE INVISIBLE THE SLIDE FROM
//   // CLONE TO ORIGINAL
//   track.style.transitionDuration = "0s";
//   track.style.transitionTimingFunction = "none";
// };

// const sneakyCloneSlide = (e) => {
//   // IF YOU LAND ON A CLONE,SLIDE TO CLONE'S ORIGINAL
//   // WITHOUT BEING NOTICED
//   transitionsOff();
//   if (currentCard.classList.contains("track__start-clone")) {
//     track.style.transform = `translateX(-${originalStartingCard.style.left})`;
//     updateCurrentCard(currentCard, originalStartingCard);
//   } else if (currentCard.classList.contains("track__end-clone")) {
//     track.style.transform = `translateX(-${originalEndCard.style.left})`;
//     updateCurrentCard(currentCard, originalEndCard);
//   } else {
//     return;
//   }
// };

// // MAIN EVENT LISTENERS
// nextCardBtn.addEventListener("click", (e) => {
//   nextCard = currentCard.nextElementSibling;
// });

// prevCardBtn.addEventListener("click", (e) => {
//   nextCard = currentCard.previousElementSibling;
// });

// const moveTrack = () => {
//   removeEventListeners();
//   transitionsOn();
//   track.style.transform = `translateX(-${nextCard.style.left})`;
//   updateCurrentCard(currentCard, nextCard);
// };

// track.addEventListener("transitionend", (e) => {
//   if (currentCard.classList.contains("clone")) {
//     sneakyCloneSlide();
//   }

//   // ADD EVENT LISTENERS BACK ONCE THE SLIDER IS FINISHED SLIDING
//   nextCardBtn.addEventListener("click", moveTrack);
//   prevCardBtn.addEventListener("click", moveTrack);
// });

// btns.forEach((btn) => btn.addEventListener("click", moveTrack));

// const intervalID = setInterval(() => {
//   if (currentCard.nextElementSibling) {
//     nextCard = currentCard.nextElementSibling;
//   } else {
//     nextCard = originalStartingCard;
//   }
//   moveTrack();
// }, 3000);

// btns.forEach((btn) =>
//   btn.addEventListener("click", (e) => clearInterval(intervalID))
// );
