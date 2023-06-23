const categoriesArrEl = document.querySelectorAll("#categories>li");

console.log(`Number of categories: ${categoriesArrEl.length}`);

categoriesArrEl.forEach((categori) => {
  const title = categori.querySelector("h2");
  const elementsOfCategori = categori.querySelectorAll("li");

  console.log(`Category: ${title.textContent}
  Elements: ${elementsOfCategori.length}`);
});
