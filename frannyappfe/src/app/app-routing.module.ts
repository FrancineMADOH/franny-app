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
import { FaqsComponent } from './beauty/faqs/faqs.component';
import { AboutComponent } from './core/about/about.component';
import { MarketSoonComponent } from './market/market-soon/market-soon.component';
import { BeautyPageComponent } from './beauty/beauty-page/beauty-page.component';

const routes: Routes = [
  {path:"", redirectTo:"/dashboard", pathMatch:"full"},
  {path:"dashboard",component:DashboardComponent},
  {path:"signup", component: SignupFormComponent },
  {path:"reset", component:ResetFormComponent},
  {path:"login", component:LoginFormComponent},
  {path:"posts",  component:AllArticlesComponent},
  {path:"posts/new", component: NewArticleComponent},
  {path:"admin", component:AdministrationComponent},
  {path:"posts/edit", component:EditArticleComponent},
  {path:"posts/view", component:ViewArticleComponent},
  {path:"id/bibliographie", component: BibliographieComponent},
  {path:"beauty/faqs", component:FaqsComponent},
  {path:"beauty", component:BeautyPageComponent},
  {path:"about",component:AboutComponent},
  {path:"market", component:MarketSoonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
