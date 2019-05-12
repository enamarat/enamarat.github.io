
// Display a particular section depending on a clicked link
const changeSection = (event) => {
  const sections = document.querySelectorAll(".section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }

  let chosenLabel = event.target.textContent.toLowerCase();

  let label = chosenLabel.trim() + "-div";
  if (label.charAt(0) === "a") {
    label = label.substring(0, 6).trim() + "-div";
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
