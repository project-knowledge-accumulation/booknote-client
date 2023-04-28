import { BookInfo, noteCollection } from "./globals";

export class bookInfoObject {
  title: string;
  author: string;
  noteCollection?: noteCollection[];

  public constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.noteCollection = [];
  }
}

export class noteObject {
  page?: number;
  note: string;

  public constructor(page: number, note: string) {
    this.page = page;
    this.note = note;
  }
}