import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
 // { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
//  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
