import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { CommentModule } from './comment/comment.module';
import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './hero.service';
import { MessageService }       from './message.service';
import { MessagesComponent }    from './messages/messages.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { MomentAgoPipe } from './pipes/moment-ago.pipe';
import { MathCaptchaComponent } from './math-captcha.component';
import { InWordPipe } from './pipes/in-word.pipe';
import { ToStrPipe } from './pipes/to-str.pipe';
import { CommentService } from './comment.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxPaginationModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    CommentsComponent,
    CommentListComponent,
    CommentFormComponent,
    MathCaptchaComponent,
    MomentAgoPipe,
    InWordPipe,
    ToStrPipe
  ],
  providers: [ HeroService, MessageService, CommentService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
