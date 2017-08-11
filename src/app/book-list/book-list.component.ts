import { Component, OnInit } from '@angular/core';
import {Book} from '../service/model/book';
import 'rxjs/Rx';
import {BookService} from '../service/api/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})
export class BookListComponent implements OnInit {

  nbBooks: number;
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.countBooks().subscribe(nbBooks => this.nbBooks = nbBooks);
    this.bookService.getBooks().subscribe(books => this.books = books) ;
  }

}
