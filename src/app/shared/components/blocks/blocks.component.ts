import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISet } from '../../interfaces/sets';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss'],
})
export class BlocksComponent {
  @Input() public sets: Array<ISet> = [];
  @Output() public codeEvent: EventEmitter<string> = new EventEmitter();

  constructor() {}

  public getBoosters(code: string): void {
    this.codeEvent.emit(code);
  }
}
