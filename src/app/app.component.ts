import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Mon Blog';

    articles = [
      {
        titre: 'Apprendre Angular',
        sousTitre: 'Les Bases',
        contenu: 'Ce conteu est passionant ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget quam tincidunt, faucibus augue sed, consequat odio. Aliquam ante mauris, facilisis a nisl at, finibus elementum tortor. Praesent tempus luctus ex ut ornare. Maecenas aliquam dui sit amet blandit porta. Mauris sit amet dignissim dui, eget iaculis massa. Nam ex orci, interdum vitae hendrerit at, luctus id arcu. Phasellus scelerisque est a vulputate malesuada. Suspendisse semper magna rhoncus leo condimentum, sit amet malesuada quam fermentum. Duis sit amet risus non tellus dictum vulputate eget nec justo. Sed in neque odio. Donec sagittis porta lorem, ut ornare dui suscipit sit amet. Nam varius libero varius magna iaculis sagittis. Praesent diam diam, pellentesque eget fringilla non, egestas sed urna. Aliquam purus nulla, faucibus porttitor consectetur vel, tincidunt nec elit. Mauris a quam sapien.',
        curent_date : new Date(),
        loveIts : 0,
        dislike : 0
      
      },
      {
        titre: 'Allez plus Loin',
        sousTitre: 'Les différentes méthodes',
        contenu: 'Ce contenu est extraordinaire ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget quam tincidunt, faucibus augue sed, consequat odio. Aliquam ante mauris, facilisis a nisl at, finibus elementum tortor. Praesent tempus luctus ex ut ornare. Maecenas aliquam dui sit amet blandit porta. Mauris sit amet dignissim dui, eget iaculis massa. Nam ex orci, interdum vitae hendrerit at, luctus id arcu. Phasellus scelerisque est a vulputate malesuada. Suspendisse semper magna rhoncus leo condimentum, sit amet malesuada quam fermentum. Duis sit amet risus non tellus dictum vulputate eget nec justo. Sed in neque odio. Donec sagittis porta lorem, ut ornare dui suscipit sit amet. Nam varius libero varius magna iaculis sagittis. Praesent diam diam, pellentesque eget fringilla non, egestas sed urna. Aliquam purus nulla, faucibus porttitor consectetur vel, tincidunt nec elit. Mauris a quam sapien.',
        curent_date : new Date(),
        loveIts : 0,
        dislike : 0
      },
      {
        titre: 'Devenez un Pro',
        sousTitre: 'Experimentez !',
        contenu: 'Ce contenu est fantastique ! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget quam tincidunt, faucibus augue sed, consequat odio. Aliquam ante mauris, facilisis a nisl at, finibus elementum tortor. Praesent tempus luctus ex ut ornare. Maecenas aliquam dui sit amet blandit porta. Mauris sit amet dignissim dui, eget iaculis massa. Nam ex orci, interdum vitae hendrerit at, luctus id arcu. Phasellus scelerisque est a vulputate malesuada. Suspendisse semper magna rhoncus leo condimentum, sit amet malesuada quam fermentum. Duis sit amet risus non tellus dictum vulputate eget nec justo. Sed in neque odio. Donec sagittis porta lorem, ut ornare dui suscipit sit amet. Nam varius libero varius magna iaculis sagittis. Praesent diam diam, pellentesque eget fringilla non, egestas sed urna. Aliquam purus nulla, faucibus porttitor consectetur vel, tincidunt nec elit. Mauris a quam sapien.',
        curent_date : new Date(),
        loveIts : 0,
        dislike : 0

      },
    ];
    
constructor() { }

ngOnInit() { 
  
}

}