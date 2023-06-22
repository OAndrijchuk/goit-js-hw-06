const categoriesEl = document.querySelector("#categories");
const categoriesChildrenArr = [...categoriesEl.children];

console.log(`Number of categories: ${categoriesChildrenArr.length}`);

categoriesChildrenArr.forEach(({ children: category } = {}) => {
  console.log(`Category: ${category[0].textContent}
  Elements: ${category[1].children.length}`);
});
