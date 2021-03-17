import './styles.css';
import 'material-design-icons/iconfont/material-icons.css';
import imagesApiService from './api/apiService';
import imageCardTpL from './templates/image-card.hbs';

const refs = {
  searchInput: document.querySelector('#search-form'),
  imgGallery: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more-btn'),
};

refs.searchInput.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


function onSearch(event){
  event.preventDefault();
  clearImageGallery();
  const query = event.currentTarget.elements.query.value;

  imagesApiService.setQuery(query);
  imagesApiService.resetPage();
  imagesApiService.fetchImages()
  .then(createImageCardMarkup);
}

function onLoadMore(){
  imagesApiService.fetchImages()
  .then(createImageCardMarkup);
}

function createImageCardMarkup(images){
  refs.imgGallery.insertAdjacentHTML('beforeend', imageCardTpL(images));
}

function clearImageGallery(){
  refs.imgGallery.innerHTML = '';
}

