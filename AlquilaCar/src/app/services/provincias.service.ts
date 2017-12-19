import { Injectable } from '@angular/core';

@Injectable()
export class ProvinciasService {
  provincias: string[] = ['alava', 'albacete', 'alicante', 'almería', 'asturias', 'avila', 'badajoz', 'barcelona', 'burgos', 'cáceres',
    'cádiz', 'cantabria', 'castellón', 'ciudad Real', 'córdoba', 'la coruña', 'cuenca', 'gerona', 'granada', 'guadalajara',
    'guipúzcoa', 'huelva', 'huesca', 'islas baleares', 'jaén', 'león', 'lérida', 'lugo', 'madrid', 'málaga', 'murcia', 'navarra',
    'orense', 'palencia', 'las palmas', 'pontevedra', 'la rioja', 'salamanca', 'segovia', 'sevilla', 'soria', 'tarragona',
    'santa cruz de tenerife', 'teruel', 'toledo', 'valencia', 'valladolid', 'vizcaya', 'zamora', 'zaragoza'];
  constructor() { }

}
