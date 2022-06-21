import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'users/:id',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'user-board',
    loadChildren: () => import('./pages/user-board/user-board.module').then( m => m.UserBoardPageModule)
  },
  {
    path: 'admin-board',
    loadChildren: () => import('./pages/admin-board/admin-board.module').then( m => m.AdminBoardPageModule)
  },
  {
    path: 'historique',
    loadChildren: () => import('./pages/historique/historique.module').then( m => m.HistoriquePageModule)
  },
  {
    path: 'add-depense',
    loadChildren: () => import('./pages/add-depense/add-depense.module').then( m => m.AddDepensePageModule)
  },
  {
    path: 'edit-profil',
    loadChildren: () => import('./pages/edit-profil/edit-profil.module').then( m => m.EditProfilPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },
  {
    path: 'compte',
    loadChildren: () => import('./pages/compte/compte.module').then( m => m.ComptePageModule)
  },


  {
    path: '**',
    loadChildren: () => import('./pages/erreur-route/erreur-route.module').then( m => m.ErreurRoutePageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
