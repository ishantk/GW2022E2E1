import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  news: any[] = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getDataFromNewsApi()
  }


  getDataFromNewsApi() {
    this.http.get("https://newsapi.org/v2/everything?q=sports&apiKey=0e9c0fa5ae1c471a8677099743999f7f&pageSize=20")
    .subscribe({
      next: (value) => {
        // console.log(value);
        this.news = Array.from(value['articles']).map(e => e);
      },
      error: (error) => {
        console.log(error);
        
      },
      complete: () => {}
    })
    
  }
}
