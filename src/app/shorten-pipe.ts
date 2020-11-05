import {PipeTransform,Pipe} from '@angular/core'
@Pipe({
    name:'shorten'
})
export class PipeComponent implements PipeTransform{
    transform(value){
        return value.substr(0,5);
    }
}