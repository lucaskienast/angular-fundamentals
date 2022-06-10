import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import { UserComponent } from './components/users/user/user.component';
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipes/safe/safe.pipe';
import { ChatComponent } from './components/chat/chat.component';
import { UsersComponent } from './components/users/users.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { StringInterpolationComponent } from './components/bindings/string-interpolation/string-interpolation.component';
import { PropertyBindingsComponent } from './components/bindings/property-bindings/property-bindings.component';
import { EventBindingComponent } from './components/bindings/event-binding/event-binding.component';
import { CounterActionsComponent } from './components/counter-actions/counter-actions.component';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TransformDirective,
    SafePipe,
    ChatComponent,
    UsersComponent,
    StringInterpolationComponent,
    PropertyBindingsComponent,
    EventBindingComponent,
    CounterActionsComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
