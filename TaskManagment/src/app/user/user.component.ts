import { Component, EventEmitter, Input, Output, computed } from '@angular/core';
import { user } from './user.model';
import { CardComponent } from '../Shared/card/card.component';

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
 @Input({required:true}) user!:user;
 @Input({required:true}) selected!:boolean;
 @Output() select = new EventEmitter()
 get Imageuser(){
   return 'assets/users/' + this.user.avatar
 }
onSelectedUsers(){
  this.select.emit(this.user.id)

}

}
