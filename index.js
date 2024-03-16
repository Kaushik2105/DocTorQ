alert("Work in progress!! Please open this page on PC");
const navbarToggler = document.querySelector(".navbar-toggler");
const closeBton = document.querySelector(".close-button");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  navbarCollapse.classList.add("show");
  closeBton.style.display = "block";
});

closeBton.addEventListener("click", function () {
  navbarCollapse.classList.remove("show");
  closeBton.style.display = "none";
});

//chatbot stuffs ;
const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", `${className}`);
  let chatContent =
    className === "outgoing"
      ? `<p></p>`
      : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
  chatLi.innerHTML = chatContent;
  chatLi.querySelector("p").textContent = message;
  return chatLi;
};

const generateResponse = (chatElement) => {
  const API_URL = "https://api.openai.com/v1/chat/completions";
  const messageElement = chatElement.querySelector("p");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: userMessage },
      ],
    }),
  };

  fetch(API_URL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      messageElement.textContent = data.choices[0].message.content.trim();
    })
    .catch(() => {
      messageElement.classList.add("error");
      messageElement.textContent =
        "Oops! Something went wrong. Please try again.";
    })
    .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatInput.style.height = `${inputInitHeight}px`;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  setTimeout(() => {
    const incomingChatLi = createChatLi("Thinking...", "incoming");
    chatbox.appendChild(incomingChatLi);
    chatbox.scrollTo(0, chatbox.scrollHeight);
    generateResponse(incomingChatLi);
  }, 600);
};

chatInput.addEventListener("input", () => {
  chatInput.style.height = `${inputInitHeight}px`;
  chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
    e.preventDefault();
    handleChat();
  }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () =>
  document.body.classList.remove("show-chatbot")
);
chatbotToggler.addEventListener("click", () =>
  document.body.classList.toggle("show-chatbot")
);

//back to top button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".back-to-top").classList.add("show");
  } else {
    document.querySelector(".back-to-top").classList.remove("show");
  }
};

// Scroll to the top when the button is clicked
document.querySelector(".back-to-top").onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// ---code for fetching the data for contact section---
//code for firebase :)
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzYu3M1egily9RCTv07OX0-RydEvpQMjU",
  authDomain: "contact-section-75ebe.firebaseapp.com",
  projectId: "contact-section-75ebe",
  storageBucket: "contact-section-75ebe.appspot.com",
  messagingSenderId: "68918913156",
  appId: "1:68918913156:web:8e314d5a720bdd99f6bad1",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

//code for fetching data for contact-us :)
const saveData = () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  db.collection("users")
    .add({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.log("Error adding document: ", error);
    });
};

//4th container stuffs
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    navContainer: ".owl-nav",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});

// Gallery carousel (uses the Owl Carousel library)
$(".gallery-carousel").owlCarousel({
  autoplay: true,
  autoplayTimeout: 4000,
  dots: true,
  loop: true,
  center: true,
  responsive: {
    0: { items: 1 },
    768: { items: 1 },
    992: { items: 3 },
    1200: { items: 3 },
  },
});
