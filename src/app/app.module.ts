import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './core/header/header.component';
import {FooterComponent} from './core/footer/footer.component';
// import { PostListComponent } from './post/post-list/post-list.component';
// import { PostDetailComponent } from './post/post-detail/post-detail.component';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxEditorModule} from 'ngx-editor';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Route, RouterModule} from '@angular/router';
import {NotFoundComponent} from './core/not-found/not-found.component';
import {LoginComponent} from './auth/login/login.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {DashboardComponent} from './core/dashboard/dashboard.component';
import {ProfileComponent} from './core/profile/profile.component';
import {NGXS_PLUGINS, NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {ConstantService} from './constant.service';
import {CreateNewNoteComponent} from './core/notes/create-new-note/create-new-note.component';
import {NoteDetailComponent} from './core/notes/note-detail/note-detail.component';
import {NotePreviewListComponent} from './core/search/note-preview-list/note-preview-list.component';
import {CommentListComponent} from './core/comment/comment-list/comment-list.component';
import {CommentDetailComponent} from './core/comment/comment-detail/comment-detail.component';
import {BookmarkListComponent} from './core/bookmark/bookmark-list/bookmark-list.component';
import {BookmarkDetailComponent} from './core/bookmark/bookmark-detail/bookmark-detail.component';
import {SideBarComponent} from './core/side-bar/side-bar.component';
import {NotePreviewCardComponent} from './core/search/note-preview-card/note-preview-card.component';
import {NoteRecommendationsDetailsComponent} from './core/search/note-recommendations-details/note-recommendations-details.component';
import {NoteRecommendationListComponent} from './core/search/note-recommendation-list/note-recommendation-list.component';
import {NoteStateReducer} from './core/notes/ngxs/notes.state';
import {CoreWrapperComponent} from './core/core-wrapper/core-wrapper.component';
import {AuthWrapperComponent} from './auth/auth-wrapper/auth-wrapper.component';
import {AuthStateReducer} from './auth/ngxs/auth.state';
import {persistPlugin} from './ngxs/ngxs.plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import { TimeAgoPipe } from './time-ago.pipe';
// import {NoteStateReducer} from './notes/ngxs/notes.state';

const routes: Route[] = [

  {
    path: 'core', component: CoreWrapperComponent, children: [
      {path: 'create', component: CreateNewNoteComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'note/:_id', component: NoteDetailComponent},
      {path: 'search', component: NotePreviewListComponent},
    ]
  },
  {
    path: 'auth', component: AuthWrapperComponent, children: [
      {path: 'login', component: LoginComponent},
    ]
  },
  {path: '', component: NotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    // PostListComponent,
    // PostDetailComponent,
    CommentListComponent,
    CommentDetailComponent,
    BookmarkListComponent,
    BookmarkDetailComponent,
    SideBarComponent,
    NotePreviewCardComponent,
    NoteDetailComponent,
    NoteRecommendationsDetailsComponent,
    NoteRecommendationListComponent,
    CreateNewNoteComponent,
    NotFoundComponent,
    NotePreviewListComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    CoreWrapperComponent,
    AuthWrapperComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    NgxEditorModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxsModule.forRoot([
      NoteStateReducer,
      AuthStateReducer
    ]),
    NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}