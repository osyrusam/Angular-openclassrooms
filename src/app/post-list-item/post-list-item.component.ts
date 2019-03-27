import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() articleTitre: string;
  @Input() articleSoustire: string;
  @Input() articleContenu: string;
  @Input() articleDate: string;
  @Input() articleLike: number;
  @Input() articleDislike: number;
 
  onLikeit(){
    console.log("Vous aimez ce post");   
    this.articleLike += 1 ;
    console.log(this.articleLike);
  }
  onDontlike(){
   console.log("Vous n' aimez pas ce post");
   this.articleDislike += 1;
   console.log(this.articleDislike);
  }
  
  getColor() {
    if (this.articleLike > 0) {
      return 'green';
    } else if(this.articleLike < this.articleDislike) {
      return 'red';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}

