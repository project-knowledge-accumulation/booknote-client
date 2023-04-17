export type BookNote = {
    name: string
    uId: string
    bookInfo: BookInfo[]
  }
  
  export type BookInfo = {
    title: string
    noteCollection: noteCollection[]
  }
  
  export type noteCollection = {
    page?: number
    note: string
  }