package com.example.Ex1LibraryManagement.Service;

import com.example.Ex1LibraryManagement.Repository.BookRepository;

public class BookService
{
    private BookRepository bookRepository;

    // Setter injection
    public void setBookRepository(BookRepository bookRepository)
    {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName)
    {
        System.out.println("BookService: Adding book...");
        bookRepository.saveBook(bookName);
    }
}
