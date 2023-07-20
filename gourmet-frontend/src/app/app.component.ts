import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Gourmet';

  constructor(
    // private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.queryParams.subscribe(
    //   (params: any) => {
    //     console.log('params', params);
    //     this.title = params.title || 'Gourmet';
    //   }
    // )
  }

}
