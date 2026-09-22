(function () {
  var container = document.getElementById('news-items');
  var button = document.querySelector('.news-toggle');
  if (!container || !button) return;

  var items = container.querySelectorAll(':scope > ul > li');
  if (items.length <= 10) return;

  function setExpanded(expanded) {
    for (var i = 10; i < items.length; i++) {
      items[i].hidden = !expanded;
    }
    button.setAttribute('aria-expanded', String(expanded));
    button.textContent = expanded ? '▴ Show less' : '▾ Show all';
  }

  setExpanded(false);
  button.hidden = false;
  button.addEventListener('click', function () {
    setExpanded(button.getAttribute('aria-expanded') !== 'true');
  });
}());
