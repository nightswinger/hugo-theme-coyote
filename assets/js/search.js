let fuse
const fuseOptions = {
  shouldSort: true,
  includeMatches: true,
  threshold: 0.0,
  tokenize:true,
  ignoreLocation: true,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    {name:"title",weight:0.8},
    {name:"contents",weight:0.5},
    {name:"tags",weight:0.3},
    {name:"categories",weight:0.3}
  ]
}

window.onload = function () {
  fetch('../index.json')
    .then(resp => resp.json())
    .then(data => {
      fuse = new Fuse(data, fuseOptions)
    })
}

const input = document.getElementById('searchInput')
const results = document.getElementById('searchResults')

input.addEventListener('keyup', (e) => {
  const items = fuse.search(e.target.value)

  if (items.length > 0) {
    let itemList = ''

    for (let i in items) {
      itemList += `<div class="resultItem">`
        + `<div class="resultItem__media" style="background-image: url(${items[i].item.image});"></div>`
        + `<div class="resultItem__body">`
        + `<h3 class="resultItem__title"><a href="${items[i].item.permalink}">${items[i].item.title}</a></h3>`
        + `<div class="resultItem__footer">${items[i].item.date}</div>`
        + `</div>`
        + `</div>`
    }

    results.innerHTML = itemList
  } else {
    results.innerHTML = ''
  }
})

// Prevent search clears
input.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    e.preventDefault()
  }
})
