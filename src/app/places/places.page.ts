import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  private places = [
    {
      id: '1',
      title: 'Eiffel Tower',
      // eslint-disable-next-line max-len
      imageURL: 'https://ak.uecdn.es/p/108/thumbnail/entry_id/0_isonewdb/width/660/cache_st/1657033185/type/2/bgcolor/000000/0_isonewdb.jpg',
      comments: ['Awesome palce', 'wonderfull experience']
    },
    {
      id: '1',
      title: 'Statue of Liberty',
      // eslint-disable-next-line max-len
      imageURL: 'https://estatuadelalibertad.info/wp-content/uploads/2019/04/foto-estatua-de-la-libertad.jpg',
      comments: ['Awesome palce', 'wonderfull experience']
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
