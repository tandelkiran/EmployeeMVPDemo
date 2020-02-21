import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojiPipe'
})
export class EmojiPipe implements PipeTransform {

  transform(value: string, emoji: string): any {
    if (value === 'smile') {
      emoji = '😁';
    }
    else if (value === 'sad') {
      emoji = '😪';
    }
    else if (value === 'angry') {
      emoji = '💀';
    }
    else {
      emoji = '👆';
    }
    return emoji;
  }
}
