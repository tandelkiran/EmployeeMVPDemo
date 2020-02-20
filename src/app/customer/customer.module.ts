import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerFormContainer } from './customer-form-container/customer-form-container';
import { CustomerFormPresentation } from './customer-form-container/customer-form-presentation/customer-form-presentation';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { PipeDemoContainer } from './pipe-demo-container/pipe-demo-container';
import { DirectiveDemoContainer } from './directive-demo-container/directive-demo-container';
import { PipeDemoPresentation } from './pipe-demo-container/pipe-demo-presentation/pipe-demo-presentation';
import { DirectiveDemoPresentation } from './directive-demo-container/directive-demo-presentation/directive-demo-presentation';
import { EmojiDirective } from './directives/emoji.directive';
import { EmojiPipePipe } from './pipes/emoji-pipe.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CustomerFormContainer, CustomerFormPresentation, DynamicComponent, PipeDemoContainer, 
    DirectiveDemoContainer, PipeDemoPresentation, DirectiveDemoPresentation, EmojiDirective, EmojiPipePipe],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    PortalModule,
    OverlayModule
  ],
  entryComponents: [DynamicComponent]
})
export class CustomerModule { }
