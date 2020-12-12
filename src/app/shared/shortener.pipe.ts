import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'shortener'
})
export class ShortenerPipe implements PipeTransform {
    transform(value: string, limit: number) {
        return `${value.substring(0, limit).substring(0, value.lastIndexOf(' '))} ...`
    }

}