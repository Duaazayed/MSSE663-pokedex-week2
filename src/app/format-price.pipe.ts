import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPrice',
})
export class FormatPricePipe implements PipeTransform {
  transform(value: number): string {
    // Format the price as needed
    return '$' + value.toFixed(2);
  }
}
