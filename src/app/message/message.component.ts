import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-message',
  template: `

    <div *ngIf="erro()"
         class="ui-message ui-message-error ui-corner-all">
      {{ text }}
    </div>
  `,
  styles: []
})
export class MessageComponent {

  @Input() control: FormControl;
  @Input() error: string;
  @Input() text: string;

  erro(): boolean{
    return this.control.hasError(this.error) && this.control.dirty;
  }
}
