declare module BookSearchResult {

  export interface Rating {
    max: number;
    numRaters: number;
    average: string;
    min: number;
  }

  export interface Tag {
    count: number;
    name: string;
    title: string;
  }

  export interface Images {
    small: string;
    large: string;
    medium: string;
  }

  export interface Series {
    id: string;
    title: string;
  }

  export interface Book {
    rating: Rating;
    subtitle: string;
    author: string[];
    pubdate: string;
    tags: Tag[];
    origin_title: string;
    image: string;
    binding: string;
    translator: string[];
    catalog: string;
    pages: string;
    images: Images;
    alt: string;
    id: string;
    publisher: string;
    isbn10: string;
    isbn13: string;
    title: string;
    url: string;
    alt_title: string;
    author_intro: string;
    summary: string;
    price: string;
    series: Series;
  }

  export interface RootObject {
    count: number;
    start: number;
    total: number;
    books: Book[];
  }

}

