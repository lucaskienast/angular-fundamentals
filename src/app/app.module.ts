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
import {FormsModule} from "@angular/forms";
import { AttributeBindingComponent } from './components/bindings/attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './components/bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './components/bindings/style-binding/style-binding.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRowComponent } from './components/users/user-row/user-row.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import {UserService} from "./services/user/user.service";
import {HttpClientModule} from "@angular/common/http";
import { ParentComponent } from './components/parent/parent.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';

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
    HelloComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    HeaderComponent,
    UserRowComponent,
    PlaceholderComponent,
    ParentComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  exports: [],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
