import {Pipe, PipeTransform} from '@angular/core'
@Pipe(
    {
        name:'filter',
        pure:false
    })
export class FilterPipe implements PipeTransform{
    transform(value,filter,property)
    {
        if(value.length===0||filter==='')
        {
            return value;
        }
        let ar=[];
        for(let i of value)
        {
            if(i[property]===filter)
            {
                ar.push(i);
            }
        }
        return ar;

    }
}