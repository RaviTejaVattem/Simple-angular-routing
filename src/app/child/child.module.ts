import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { routing } from './child.routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [ChildComponent],
})
export class ChildModule {}
