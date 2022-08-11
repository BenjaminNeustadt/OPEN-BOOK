const buttonEl = document.querySelector('#toggle');
const rows = document.querySelectorAll('.shop-row');
const search = document.querySelector('.search-container');

const showMap = () => {
  rows.forEach(row => row.classList.remove('hide-list'))
    search.classList.remove('hide-list')

    document.querySelector('#map').classList.add('hide-map')
    
    buttonEl.innerHTML = "Map"
}

const showList = () => {
  document.querySelector('#map').classList.remove('hide-map')
  map.resize()

  rows.forEach(row => row.classList.add('hide-list'))
  search.classList.add('hide-list')

  buttonEl.innerHTML = "List"
}


const toggle = () => {

  if (buttonEl.innerHTML == "Map") {
    showList()
  } else if (buttonEl.innerHTML == "List") {
    showMap()
  } else {
    location.href = "/openbook";
  }

}
