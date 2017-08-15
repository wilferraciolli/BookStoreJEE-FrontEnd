import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Book} from '../service/model/book';
import {BookService} from '../service/api/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styles: []
})
export class BookDetailComponent implements OnInit {

  book: Book = new Book();

  /**
   * Explicit constructor
   * @param {Router} router The router to navigate tpo
   * @param {BookService} bookService The Book service
   * @param {ActivatedRoute} route containing details of the current router before going to the next one.
   */
  constructor(private router: Router, private bookService: BookService, private route: ActivatedRoute) {
   // this.book.isbn = 'fdfdfd';
  }

  /**
   * OnInit method
   */
  ngOnInit() {
    // Get the id parameters passed from the previous router and call the get book by id end point
    this.route.params
      .map(params => params['bookId'])
      .switchMap(id => this.bookService.getBook(id))
      .subscribe(book => this.book = book);
  }

  /**
   * Call the HTTP delete method and navigate back to the list of books.
   */
  delete() {
    // call delete book end point
    this.bookService.deleteBook(this.book.id)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }

  /**
   * Update a book.
   */
  update() {


    // call delete book end point
    this.bookService.updateBook(this.book.id, this.book)
      .finally(() => this.router.navigate(['/book-list']))
      .subscribe();
  }

}
