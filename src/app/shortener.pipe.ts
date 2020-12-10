import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {
    transform(value: string) {
        return `${value.substr(0, 100)} ...`
    }

}