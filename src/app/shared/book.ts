export interface Book {

  isbn:string;
  title:string;
  authors:string[];
  published:Date;
  subtitle?:string;
  rating?:number;
  thumbnails?:Thumbnail[];
  decription?:string;
}

export interface Thumbnail{
  url:string;
  title?:string;
}
