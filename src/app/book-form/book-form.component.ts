import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Book} from '../service/model/book';
import {BookService} from '../service/api/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styles: []
})
export class BookFormComponent implements OnInit {

  private book: Book = new Book();


  /**
   * Explicit constructor.
   */
  constructor(private router: Router, private bookService: BookService) {
    this.book.isbn = '00015';
  }

  /**
   * On init method
   */
  ngOnInit() {
  }

  /**
   * Create a book.
   */
  create() {
    this.bookService.createBook(this.book)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }
}
