document.querySelector(`.section-contact`).innerText
document.querySelector(`.section-tech`).innerText
document.querySelector(`.section-soft`).innerText
document.querySelector(`.section-language`).innerText
document.querySelector(`.section-project`).innerText

document.querySelector('.section-education').innerText
document.getElementById("download-pdf").addEventListener("click", function () {
  window.scrollTo(0, 0);

  setTimeout(() => {
    const element = document.getElementById("pdf-content");

    html2pdf()
      .set({
        margin: 10,
        image: { type: "jpeg", quality: 1 },
        html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      })
      .from(element)
      .save();
  }, 500);
});






