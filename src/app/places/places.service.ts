import { Injectable } from '@angular/core';
import { Place } from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      // eslint-disable-next-line max-len
      imageURL: 'https://ak.uecdn.es/p/108/thumbnail/entry_id/0_isonewdb/width/660/cache_st/1657033185/type/2/bgcolor/000000/0_isonewdb.jpg',
      comments: ['Awesome palce', 'wonderfull experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      // eslint-disable-next-line max-len
      imageURL: 'https://estatuadelalibertad.info/wp-content/uploads/2019/04/foto-estatua-de-la-libertad.jpg',
      comments: ['Awesome palce', 'wonderfull experience']
    },
  ];

  constructor() { }

  // Obtener todos los lugares
  getPlaces() {
    return [...this.places];
  }

  //Obtener un solo lugar
  getPlace(placeId: string) {
    return {
      ...this.places.find(place => place.id === placeId)
    };
  }

  //Agregar un lugar
  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + ''
    });

  }
  //Eliminar un lugar
  deletePlace(placeId: string) {
    this.places = this.places.filter(place => placeId !== placeId);
  }

}
