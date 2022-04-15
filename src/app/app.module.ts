import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { StoreModule } from '@ngrx/store';
import { CardComponent } from './card/card.component';
import { MenuComponent } from './menu/menu.component';
import { reducer } from './store/myStore.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    CardComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ myStore: reducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
