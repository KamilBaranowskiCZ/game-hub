import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetsImages'
})
export class AssetsImagePipe implements PipeTransform {

  pathToImages = "assets/images/";

  transform(value: string): string {
    return this.pathToImages + value;
  }

}
