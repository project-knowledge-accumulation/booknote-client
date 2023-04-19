import { BookInfo, noteCollection } from "./globals";

export class bookInfo {
  title: string;
  author: string;
  noteCollection?: noteCollection[];

  public constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
    this.noteCollection = [];
  }
}
