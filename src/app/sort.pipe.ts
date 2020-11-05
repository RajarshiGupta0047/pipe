import {PipeTransform,Pipe} from '@angular/core'
@Pipe({
    name:'sort'
})
export class SortPipe implements PipeTransform{
    transform(value,property){
        const p=[];
        for(let item of value)
        {
            p.push(item[property]);

        }
        for(let i=0;i<p.length;i++)
        {
            for(let j=0;j<p.length-1-i;j++)
            {
                if(p[j]>p[j+1])
                {
                    let temp=p[j];
                    p[j]=p[j+1];
                    p[j+1]=temp;
                }
            }
        }
        for(let item of value)
        {
            item[property]=p;
        }
        return value;
        
    }
}