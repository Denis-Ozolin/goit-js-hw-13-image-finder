const BASE_URL = 'https://pixabay.com/api/';
const KEY = '20731913-04720c2299aa0ca3b12520f7d';

import removeBtn from '../index';

export default {
  searchQuery: '',
  page: 1,
  perPage: 12,

fetchImages(){
  const url = `${BASE_URL}?image_type=photo&orientation=horizontal
  &q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${KEY}`;

    return fetch(url)
    .then(response => response.json())
    .then(data => {
      this.incrementPage();
      if(data.hits.length < this.perPage){
        removeBtn();
      }

      return data.hits;
    })
  },

  getQuery(){
    return this.searchQuery;
  },

  setQuery(newQuery){
    this.searchQuery = newQuery;
  },

  incrementPage(){
    this.page += 1;
  },

  resetPage(){
    this.page = 1;
  },
}

// *******to use the class*******
// export default class ImagesApiService {
//   constructor(){
//     this.searchQery = '';
//     this.page = 1;
//     this.perPage = 12;
//   }

// fetchImages(){
//   const url = `${BASE_URL}?image_type=photo&orientation=horizontal
//   &q=${this.searchQery}&page=${this.page}&per_page=${this.perPage}&key=${KEY}`;

//     return fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       this.incrementPage();
//       console.log(data.hits);
//       return data.hits;
//     })
//   }

//   get query(){
//     return this.searchQery;
//   }

//   set query(newQuery){
//     this.searchQery = newQuery;
//   }

//   incrementPage(){
//     this.page += 1;
//   }

//   resetPage(){
//     this.page = 1;
//   }
// }

