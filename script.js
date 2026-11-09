const search = document.getElementById('search');
const cards = Array.from(document.querySelectorAll('.card'));
const noResults = document.getElementById('no-results');
const count = document.getElementById('catalog-count');

function filterApps() {
  const term = search.value.trim().toLocaleLowerCase('pt-BR');
  let visible = 0;
  cards.forEach((card) => {
    const matches = card.innerText.toLocaleLowerCase('pt-BR').includes(term);
    card.hidden = !matches;
    if (matches) visible++;
  });
  noResults.hidden = visible !== 0;
  count.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'item' : 'itens'}`;
}
search.addEventListener('input', filterApps);
filterApps();
