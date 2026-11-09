(() => {
  const search = document.getElementById('search');
  const cards = Array.from(document.querySelectorAll('.apps .card'));
  const noResults = document.getElementById('no-results');
  const count = document.getElementById('catalog-count');

  if (!search || !cards.length) return;

  function filterApps() {
    const term = search.value.trim().toLocaleLowerCase('pt-BR');
    let visible = 0;

    cards.forEach((card) => {
      const matches = card.textContent.toLocaleLowerCase('pt-BR').includes(term);
      card.hidden = !matches;
      if (matches) visible += 1;
    });

    if (noResults) noResults.hidden = visible !== 0;
    if (count) {
      count.textContent = `${String(visible).padStart(2, '0')} ${visible === 1 ? 'item' : 'itens'}`;
    }
  }

  search.addEventListener('input', filterApps);
  filterApps();
})();
