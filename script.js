// When the website loads initially
const sections = document.querySelectorAll(".section");
sections[0].style.display = "flex";

const displayPortfolioImages = () => {
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

// Display a particular section depending on a clicked link
const changeSection = (event) => {
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  let chosenLabel = event.target.textContent.toLowerCase().trim();

  if (chosenLabel === "portfolio") {
    displayPortfolioImages();
  }

  let label = chosenLabel + "-div";
  if (label.charAt(0) === "a") {
    label = label.substring(0, 6).trim() + "-div";
  }

  // for the russian version of the website
  if (chosenLabel === "главная") {
    label = "main-div";
  } else if (chosenLabel === "портфолио") {
    label = "portfolio-div";
    displayPortfolioImages();
  } else if (label.charAt(0) === "о") {
    label = "about-div";
  }

  document.querySelector(`#${label}`).style.display = "flex";
}

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

// Show project's details upon clicking on its image
const showDetails = (event) => {
  const projects = document.querySelectorAll(".portfolio-image");
  let index = Array.from(projects).indexOf(event.target);

  if (event.target.className == "portfolio-image") {
    document.querySelector(".gallery").style.display = "none";
    document.querySelectorAll(".description")[index].style.display = "block";
  }
}

document.querySelector(".collection").addEventListener("click", showDetails);

// Return to gallery after visiting project's details page
const returnToGallery = (event) => {
  event.target.parentNode.style.display = "none";
  document.querySelector(".gallery").style.display = "block";
}

const linksBackToGallery = document.querySelectorAll(".go-back");
linksBackToGallery.forEach( link => link.addEventListener('click', returnToGallery));
