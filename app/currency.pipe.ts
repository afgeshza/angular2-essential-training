import { Pipe } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe {
  transform(price) {
    return (`Rp ${price},-`);
  };
}