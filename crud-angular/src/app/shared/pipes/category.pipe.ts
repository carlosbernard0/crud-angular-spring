import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'front-end' : 'code';
      case 'back-end' : 'computer';
    }
    return 'code';
  }

}
