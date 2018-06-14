import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { reducer } from './store/reducers/user.reducer';
import { DisplayComponent } from './components/display/display.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      UserStore: reducer
    }),
    EffectsModule.forRoot([
      UserEffects
    ]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
