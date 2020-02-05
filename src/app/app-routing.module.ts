import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'edit', pathMatch: 'full' ,
    loadChildren: () => import('./pages/editprofile/editprofile.module').then(m => m.EditprofilePageModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule) },
  { path: 'slider', loadChildren: () => import('./pages/slider/slider.module').then( m => m.SliderPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule) },
  { path: 'faculties', loadChildren: () => import('./pages/faculty/faculty.module').then( m => m.FacultyPageModule) },
  { path: 'departments/:id', loadChildren: () => import('./pages/department/department.module').then( m => m.DepartmentPageModule) },
  { path: 'levels/:id', loadChildren: () => import('./pages/level/level.module').then( m => m.LevelPageModule) },
  { path: 'courses/:departmentid/:levelid', loadChildren: () => import('./pages/course/course.module').then( m => m.CoursePageModule) },
  { path: 'mediaformat/:courseid', loadChildren: () => import('./pages/mediaformat/mediaformat.module').then( m => m.MediaFormatPageModule) },
  { path: 'bulkdownload', loadChildren: () => import('./pages/bulkdownload/bulkdownload.module').then( m => m.BulkDownloadPageModule) },
  { path: 'pdfviewer/:courseid', loadChildren: () => import('./pages/pdfviewer/pdfviewer.module').then( m => m.PDFViewerPageModule) },
  { path: 'audioplayer/:courseid', loadChildren: () => import('./pages/audioplayer/audioplayer.module').then( m => m.AudioPlayerPageModule) },
  { path: 'videoplayer/:courseid', loadChildren: () => import('./pages/videoplayer/videoplayer.module').then( m => m.VideoPlayerPageModule) },
  { path: 'pptviewer/:courseid', loadChildren: () => import('./pages/pptviewer/pptviewer.module').then( m => m.PPTViewerPageModule) },
  { path: 'mediaplayer/:courseid/:mediatype', loadChildren: () => import('./pages/mediaplayer/mediaplayer.module').then( m => m.MediaPlayerPageModule) },
  { path: 'favorites', loadChildren: () => import('./pages/favorite/favorite.module').then( m => m.FavoritePageModule) },
  { path: 'createroom', loadChildren: () => import('./pages/createroom/createroom.module').then( m => m.CreateRoomPageModule) },
  { path: 'chatrooms', loadChildren: () => import('./pages/chatrooms/chatrooms.module').then( m => m.ChatRoomsPageModule) },
  { path: 'chatroom', loadChildren: () => import('./pages/chatroom/chatroom.module').then( m => m.ChatRoomPageModule) }
 // { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
 // { path: 'profile', loadChildren: './src/app/pages/profile/profile.module#ProfilePageModule' },
  // { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }