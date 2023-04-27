document.addEventListener("DOMContentLoaded", () => {
  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });

  const tapToWin = document.querySelectorAll(".KSTLNav li:last-of-type")[0];
  tapToWin.classList.add("tapToWin");
  const tapToWinIcon = document.createElement("a");
  tapToWinIcon.classList.add("tapToWinIcon");
  if (document.getElementsByClassName("tapToWinIcon")) {
    tapToWinIcon.setAttribute("href", tapToWin.querySelector("a").href);
  }
  tapToWin.appendChild(tapToWinIcon);
});
