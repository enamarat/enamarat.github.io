// databaseconst
const portfolioImages = [
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_quiz3.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_5.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project1-1.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project2-1.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project3-1.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project4-1.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project5-1.jpg",
  "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_21.jpg"
];

const portfolioItems = [
  {
    name: "Star quiz",
    russianName: "Звёздная викторина",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_quiz2.jpg",
    linkToLiveDemo: "https://enamarat.github.io/stars-quiz",
    linkToGithub: "https://github.com/enamarat/stars-quiz",
    russianDescription: "Простой опрос о звёздах в галактике Млечный Путь. Пользователь должен ответить на 5 вопросов. На каждый вопрос есть 4 варианта ответа, из которых только один является верным. В зависимости от общего числа набранных очков разные сообщения появляются на итоговом экране. Vanilla JavaScript и базовый CSS были использованы для данного проекта.",
    description: "A simple quiz about stars in the Milky Way Galaxy. A user must answer 5 questions. There are 4 possible answers for every question with only one being true. Depending on total score different messages appear on the final screen. Vanilla JavaScript and basic CSS were used for this project."
  },
  {
    name: "Let me remind you",
    russianName: "Позвольте напомнить",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_5.jpg",
    linkToLiveDemo: "https://enamarat.github.io/let-me-remind-you",
    linkToGithub: "https://github.com/enamarat/let-me-remind-you",
    russianDescription: " Приложение-менеджер задач, при помощи которого пользователь может создавать задачи, назначать им подзадачи, редактировать, удалять и помечать их как исполненные. Данный проект задействует использование местного хранилища браузера, так что задачи, созданные пользователем, сохраняются в его памяти и не исчезают после закрытия браузера.",
    description: "A to-do list application with the help of which a user can create tasks, assign subtasks to them, edit, delete, and mark them as completed. This project involves the usage of browser's local storage so that tasks created by user are stored in its memory and don't dissapear after the browser is closed."
  },
  {
    name: "Random Quote Generator",
    russianName: "Генератор случайных цитат",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project1-2.jpg",
    linkToLiveDemo: "https://enamarat.github.io/techdegree-project-1",
    linkToGithub: "https://github.com/enamarat/techdegree-project-1",
    russianDescription: "Простая веб-страница, которая показывает случайные цитаты, когда пользователь кликает на кнопку внизу экрана. Данный проект отражает мою способность работать с простым кодом JavaScript, HTML и CSS. Новая цитата появляется на экране каждые 10 секунд, даже если пользователь ничего не делает, благодаря функции setInterval.",
    description: "A simple web page which displays random quotes when a user clicks a button at the bottom of the screen. This project reflects my ability to work with basic JavaScript code, HTML and CSS. A new quote appears on the screen every 10 seconds even if a user doesn't do anything due to setInterval function."
  },
  {
    name: "Pagination And Content Filter",
    russianName: "Нумерация страниц и фильтр содержимого",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project2-2.jpg",
    linkToLiveDemo: "https://enamarat.github.io/techdegree-project-2",
    linkToGithub: "https://github.com/enamarat/techdegree-project-2",
    russianDescription: "Это веб-страница, которая содержит контакты вымышленных работников. Все данные хранятся на странице. Пользователь может просматривать список работников, используя кнопки нумерации страниц внизу экрана или поле поиска. Данный проект демонстрирует моё знание того, как осуществлять итерацию в массивах данных и находить определённую информацию, которая требуется.",
    description: "This is a web page which contains contacts of fictional employees. All the data are stored on the page. A user can look through employees list using pagination buttons at the bottom of the screen or a search field. The project demonstrates my knowledge of how to iterate through arrays of data and find the paticular information that is required."
  },
  {
    name: "An Interactive Web Form",
    russianName: "Интерактивная веб-форма",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project3-2.jpg",
    linkToLiveDemo: "https://enamarat.github.io/techdegree-project-3",
    linkToGithub: "https://github.com/enamarat/techdegree-project-3",
    russianDescription: "Данная веб-форма проверяет введённые пользователем данные в клиентской части приложения. Данные формы не передаются и запрос не отправляется на сервер до тех пор, пока все поля формы не заполнены в правильном формате. Данный проект основан на отборе и манипулировании элементами DOM, а также на конструкциях условий.",
    description: "This web form validates user's input on the client side of a web application. Form data are not submitted and request to a server is not send until all the fields of the form are filled in the correct format. The project is based on DOM elements targeting and manipulation as well as on conditional statements."
  },
  {
    name: "An Object Oriented Programming Game",
    russianNane: "Игра объектно ориентированного программирования",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project4-2.jpg",
    linkToLiveDemo: "https://enamarat.github.io/techdegree-project-4",
    linkToGithub: "https://github.com/enamarat/techdegree-project-4",
    russianDescription: "Браузерная игра по угадыванию слов 'Охотник за фразами'. Игрок пытается угадать случайную, скрытую фразу, нажимая на буквы на экране или клавиатуре. Это приложение, построенное на основе парадигмы объектно ориентированного программирования. Оно разделено на отдельные объекты, каждый из которых имеет набор свойств и методов.",
    description: "A browser-based, word guessing game 'Phrase Hunter'. A player tries to guess a random, hidden phrase by clicking letters on the screen or keyboard. This is an application built on foundation of object oriented programming paradigm. It is divided into separate objects each of which has its set of properties and methods."
  },
  {
    name: "An Employee Directory",
    russianName: "Каталог работников",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_project5-2.jpg",
    linkToLiveDemo: "https://enamarat.github.io/techdegree-project-5",
    linkToGithub: "https://github.com/enamarat/techdegree-project-5",
    russianDescription: "Данный проект представляет собой базу данных работников вымышленной компании. Данные работников получены из стороннего API третьих лиц, после того как туда послан запрос GET. Затем ответ от API в формате JSON преобразовывается в HTML на веб-странице. Здесь Вы можете наблюдать технологию, известную как AJAX, в действии.",
    description: "This project represents a database of employees for a fictional company. Employees data are received from a third-party API after a GET request is sent to it. Then the response from the API in JSON format is converted to HTML on the web page. Here you may observe a technology known as AJAX in action."
  },
  {
    name: "In the spotlight",
    russianName: "В центре внимания",
    imageSource: "https://raw.githubusercontent.com/enamarat/enamarat.github.io/master/public/rsz_22.jpg",
    linkToLiveDemo: "https://in-the-spotlight.herokuapp.com/",
    linkToGithub: "https://github.com/enamarat/techdegree-project-12",
    russianDescription: "Это полномастшабное веб-приложение, размещённое в облачном сервисе Heroku. Оно посылает запросы в сторонние API третьих лиц и снабжает ценами на рынке акций и курсами обмена иностранных валют. Оно состоит как из фронт-энд, так и бэк-энд частей, и написано исключительно на JavaScript. Библиотека React была использована для клиентской стороны приложения и фреймворк Express для серверной стороны. База данных была построена при помощи MongoDB.",
    description: "This is a full-scale web application deployed on Heroku Cloud Service. It sends requests to third-party APIs and provides stock market prices and foreign currency exchange rates. It consists of both front-end and back-end and is written solely in JavaScript. React library was used for the client side of the application and Express framework for the server side. Database was built with MongoDB."
  }
];

// When the website loads initially
let portfolioItemDetailsShown = false;
let language = "english";
let rememberedIndex = null;
// Initially all sections are hidden except the first one ("Main")
const sections = document.querySelectorAll(".section");
sections[0].style.display = "flex";

// Translate website's text content
const translateText = () => {
  const labels = document.querySelectorAll(".labels label");
  if (language === "russian") {
    // Navigation links
    document.querySelector("#main").textContent = "Главная";
    document.querySelector("#portfolio").textContent = "Портфолио";
    document.querySelector("#about").textContent = "Обо мне";
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.add("russian-label");
    }
    // "Main" section
    document.querySelector("#main-div h1").textContent = "Добро пожаловать на мой веб-сайт!";
    document.querySelector("#main-div p").textContent = "Здесь можно посмотреть на портфолио моих работ и узнать немного обо мне.";
    // "Portfolio" section
    if (portfolioItemDetailsShown === false) {
      document.querySelector(".gallery h1").textContent = "Мои работы";
      document.querySelector("#codepen").innerHTML = `Мои проекты есть также на <a href="https://codepen.io/enamarat"> Codepen </a>`;
    }
    //"About Me" section
    document.querySelector("#bio-header").textContent = "Не история, но видение будущего";
    document.querySelectorAll(".text p")[0].textContent = "Меня зовут Марат Еналиев, и я живу в Москве, Россия. Я начинающий веб-разработчик. Главным образом я концентрирую свои усилия на изучении JavaScript.";
    document.querySelectorAll(".text p")[1].textContent = "Построение карьеры в веб-разработке - этой мой личный, сознательный выбор. Эта работа предоставляет тебе безграничные возможности для творчества, и всегда есть что-то новое, чему ты можешь научиться. Самосовершествование и самовыражение являются моими ключевыми целями в жизни, поэтому я по-настоящему мотивирован расти в этой области.";
    document.querySelectorAll(".text p")[2].textContent = "Мои увлечения - это велосипедные поездки, прогулки по лесу и чтение книг.";
    document.querySelector(".photo h2").textContent = "Контакты";
    document.querySelector(".photo p").textContent = "электронная почта: enamarat@yandex.ru";
  } else if (language === "english") {
    // Navigation links
    document.querySelector("#main").textContent = "Main";
    document.querySelector("#portfolio").textContent = "Portfolio";
    document.querySelector("#about").textContent = "About me";
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.remove("russian-label");
    }
    // "Main" section
    document.querySelector("#main-div h1").textContent = "Welcome to my website!";
    document.querySelector("#main-div p").textContent = "You can look at portfolio of my works here and get some information about me.";
    // "Portfolio" section
    if (portfolioItemDetailsShown === false) {
      document.querySelector(".gallery h1").textContent = "My works";
      document.querySelector("#codepen").innerHTML = `There are also my projects on <a href="https://codepen.io/enamarat"> Codepen </a>`;
    }
    //"About Me" section
    document.querySelector("#bio-header").textContent = "Not history , but vision of the future";
    document.querySelectorAll(".text p")[0].textContent = "My name is Marat Enaliev, and I live in Moscow, Russia. I am an aspiring web developer. Primarily I concetrate my efforts on studying JavaScript.";
    document.querySelectorAll(".text p")[1].textContent = "Making career in web development is my personal conscious choice. This job provides you with limitless possibilities to express your creativity, and you always have something new to learn. Self-perfection and self-expression are my key life goals, so I'm truly motivated to grow in this field.";
    document.querySelectorAll(".text p")[2].textContent = "My hobbies are cycling, roaming in the woods, and reading books.";
    document.querySelector(".photo h2").textContent = "Contacts";
    document.querySelector(".photo p").textContent = "email: enamarat@yandex.ru";
  }
}

// Switch languages
const switchLanguages = (event) => {
  if (event.target.id.trim() === "russian") {
    language = "russian";
  } else if (event.target.id.trim() === "english") {
    language = "english";
  }
  translateText();
  if (portfolioItemDetailsShown === true) {
    showDetails(event);
  }
}
document.querySelector(".languages").addEventListener('click', switchLanguages);

// Highlight active link by changing its color
const highlightLink = (event) => {
  if (event.target.tagName === "LABEL") {
    const links = document.querySelectorAll(".labels label");
    for (let i = 0; i < links.length; i++) {
      links[i].className = "";
    }
    event.target.className = "active";
    changeSection(event);
  }
}
document.querySelector(".labels").addEventListener("click", highlightLink);

// Display a particular section depending on a clicked link
const changeSection = (event) => {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  let chosenLabel = event.target.textContent.toLowerCase().trim();
  if (chosenLabel === "portfolio") {
    if (portfolioItemDetailsShown === false) {
      displayPortfolioImages();
    }
  }

  let label = chosenLabel + "-div";
  if (label.charAt(0) === "a") {
    label = label.substring(0, 6).trim() + "-div";
  }

  // For the russian version of the website
  if (chosenLabel === "главная") {
    label = "main-div";
  } else if (chosenLabel === "портфолио") {
    label = "portfolio-div";
    if (portfolioItemDetailsShown === false) {
      displayPortfolioImages();
    }
  } else if (label.charAt(0) === "о") {
    label = "about-div";
  }
  document.querySelector(`#${label}`).style.display = "flex";

  if (language === "russian") {
    const labels = document.querySelectorAll(".labels label");
    for (let i = 0; i < labels.length; i++) {
      labels[i].classList.add("russian-label");
    }
  }
}

// Display portfolio images when a user visits "Portfolio" section
const displayPortfolioImages = () => {
  let collectionContent = "";
  for (let i = 0; i < portfolioImages.length; i++) {
    collectionContent += `
    <div class="portfolio-item">
      <div class="image">
        <img class="portfolio-image" src="${portfolioImages[i]}"/>
      </div>
    </div>
    `;
  }
  document.querySelector(".collection").innerHTML = collectionContent;
}

// Show project's details upon clicking on its image
const showDetails = (event) => {
  const projects = document.querySelectorAll(".portfolio-image");
  let index = null;
  if (portfolioItemDetailsShown === false) {
    index = Array.from(projects).indexOf(event.target);
    rememberedIndex = index;
  } else if (portfolioItemDetailsShown === true) {
    index = rememberedIndex;
  }

  // Determine language in which details will be shown
  let returnToGalleryLink = null;
  let portfolioItemName = null;
  let portfolioItemDescription = null;
  let demoLink = null;
  let githubLink = null;

  if (language === "english") {
    returnToGalleryLink = "go back";
    portfolioItemName = portfolioItems[index].name;
    portfolioItemDescription = portfolioItems[index].description;
    demoLink = "Live demo";
    githubLink = "GitHub repository";
  } else if (language === "russian") {
    returnToGalleryLink = "назад";
    portfolioItemName = portfolioItems[index].russianName;
    portfolioItemDescription = portfolioItems[index].russianDescription;
    demoLink = "Живое демо";
    githubLink = "Хранилище на GitHub";
  }

  // Display content
  if (event.target.className == "portfolio-image" |
      event.target.className == "language-icon") {
    let description = `<div class='description'>
      <p class='go-back'> ${returnToGalleryLink} </p>
      <h3 class='projectTitle'> ${portfolioItemName} </h3>
      <div class='details'>
        <img class='details-image' src='${portfolioItems[index].imageSource}'/>
        <div class='information'>
          <p class='link'> <a href='${portfolioItems[index].linkToLiveDemo}'> ${demoLink} </a> </p>
          <p class='link'> <a href='${portfolioItems[index].linkToGithub}'> ${githubLink}  </a> </p>
          <p class='intended'> ${portfolioItemDescription} </p>
        </div>
      </div>
    </div>`;

    document.querySelector("#portfolio-div").innerHTML = description;
    document.querySelector(".go-back").addEventListener('click', returnToGallery);
  }
  portfolioItemDetailsShown = true;
}

document.querySelector(".collection").addEventListener("click", showDetails);

// Return to gallery after visiting project's details page
const returnToGallery = (event) => {
  portfolioItemDetailsShown = false;
  rememberedIndex = null;
  let content = `<div class="gallery vertical-container">
    <h1> My works </h1>
      <div class="collection vertical-container">
      </div>
      <p id="codepen"> There are also my projects on <a href="https://codepen.io/enamarat"> Codepen </a></p>
  </div>`;
  document.querySelector("#portfolio-div").innerHTML = content;
  displayPortfolioImages();
  document.querySelector(".collection").addEventListener("click", showDetails);
}
