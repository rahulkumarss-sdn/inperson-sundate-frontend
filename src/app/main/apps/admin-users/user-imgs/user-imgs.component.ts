import { Component, OnInit } from '@angular/core';
import { CarouselImages } from 'app/main/components/carousel/carousel.component';
import * as snippet from 'app/main/components/carousel/carousel.snippetcode';

@Component({
  selector: 'app-user-imgs',
  templateUrl: './user-imgs.component.html',
  styleUrls: ['./user-imgs.component.scss']
})
export class UserImgsComponent implements OnInit {

    // public
    public contentHeader: object;
    public carouselImages: CarouselImages = {
      one: 'assets/images/slider/01.jpg',
      two: 'assets/images/slider/02.jpg',
      three: 'assets/images/slider/03.jpg',
      four: 'assets/images/slider/04.jpg',
      five: 'assets/images/slider/05.jpg',
      six: 'assets/images/slider/06.jpg'
    };
  
    // snippet code variables
    public _snippetCodeBasicExample = snippet.snippetCodeBasicExample;
    public _snippetCodeOptionalCaptions = snippet.snippetCodeOptionalCaptions;
    public _snippetCodeIntervalOption = snippet.snippetCodeIntervalOption;
    public _snippetCodePauseOption = snippet.snippetCodePauseOption;
    public _snippetCodeWrapOption = snippet.snippetCodeWrapOption;
    public _snippetCodeKeyboardOption = snippet.snippetCodeKeyboardOption;
    public _snippetCodeNavigationArrow = snippet.snippetCodeNavigationArrow;
    public _snippetCodeNavigationIndicators = snippet.snippetCodeNavigationIndicators;
    public _snippetCodeCrossfade = snippet.snippetCodeCrossfade;
    public _snippetCodeActiveId = snippet.snippetCodeActiveId;
  constructor() { }

  ngOnInit(): void {
  }

}
