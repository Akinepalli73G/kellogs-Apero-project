document.addEventListener("DOMContentLoaded", () => {
  const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );

  const tapToWin = document.querySelectorAll(".KSTLNav li");

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

  tapToWin.forEach((liText) => {
    if (liText.querySelector("a").innerText == "TAP TO WIN £300") {
      liText.classList.add("tapToWin");
      const tapToWinIcon = document.createElement("a");
      tapToWinIcon.setAttribute.add('href', liText.querySelector("a").href);
      tapToWinIcon.classList.add("tapToWinIcon");
      liText.insertBefore(tapToWinIcon, liText.firstElementChild);
    }
  });
});
