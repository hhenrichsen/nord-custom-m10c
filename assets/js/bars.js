document.querySelectorAll('table').forEach(table => {
  const element = document.createElement('div')
  table.parentElement.replaceChild(element, table)
  element.appendChild(table)
  new SimpleBar(element, { autoHide: true })
})
