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
  const query = event.currentTarget.elements.query.value.trim();
  if(!query) return;

  imagesApiService.setQuery(query);
  imagesApiService.resetPage();
  imagesApiService.fetchImages()
  .then(data => {
    createImageCardMarkup(data);
    addBtn();
  });
}

function onLoadMore(){
  imagesApiService.fetchImages()
  .then(data => {
    const scrollToY = refs.imgGallery.offsetTop + refs.imgGallery.clientHeight;
    createImageCardMarkup(data);
    onScrollDisplay(scrollToY);
  });
}

function createImageCardMarkup(images){
  refs.imgGallery.insertAdjacentHTML('beforeend', imageCardTpL(images));
}

function addBtn(){
  refs.loadMoreBtn.classList.add('is-hidden');
}

function clearImageGallery(){
  refs.imgGallery.innerHTML = '';
}

function onScrollDisplay(step){
  window.scrollTo({
    top: step,
    behavior: 'smooth',
  });
}

function removeBtn(){
  refs.loadMoreBtn.classList.remove('is-hidden');
}

export default removeBtn;


