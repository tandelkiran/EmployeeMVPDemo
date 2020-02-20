import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe'
})
export class EmojiPipePipe implements PipeTransform {

  transform(value: any,emoji: any): any {
    debugger
    if(value == 'smile')
    {
      emoji='😁';
    }
    else if(value == 'sad')
    {
      emoji='😪';
    }
    else
    {
      emoji='💀';
    }
    console.log('pipe called..');
    
    return emoji;
  }
}
