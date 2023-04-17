import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './authentication/authComponents/dashboard/dashboard.component';
import { LoginFormComponent } from './authentication/authComponents/login-form/login-form.component';
import { ResetFormComponent } from './authentication/authComponents/reset-form/reset-form.component';
import { SignupFormComponent } from './authentication/authComponents/signup-form/signup-form.component';
import { AllArticlesComponent } from './blog/all-articles/all-articles.component';
import { NewArticleComponent } from './blog/new-article/new-article.component';
import { AdministrationComponent } from './blog/administration/administration.component';
import { EditArticleComponent } from './blog/edit-article/edit-article.component';
import { ViewArticleComponent } from './blog/view-article/view-article.component';
import { BibliographieComponent } from './blog/bibliographie/bibliographie.component';

const routes: Routes = [
  {path:"", component:LoginFormComponent, pathMatch:"full"},
  {path:"signup", component: SignupFormComponent },
  {path:"reset", component:ResetFormComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"posts",  component:AllArticlesComponent},
  {path:"posts/new", component: NewArticleComponent},
  {path:"admin", component:AdministrationComponent},
  {path:"posts/edit", component:EditArticleComponent},
  {path:"posts/view", component:ViewArticleComponent},
  {path:"id/bibliographie", component: BibliographieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
