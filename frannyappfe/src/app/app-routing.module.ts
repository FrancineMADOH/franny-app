import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
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
import { RdvComponent } from './beauty/rdv/rdv.component';
import { BeautifyerComponent } from './beauty/beautifyer/beautifyer.component';
import { ReviewComponent } from './beauty/review/review.component';
import { PrestationComponent } from './beauty/prestation/prestation.component';
import { AddRdvComponent } from './beauty/add-rdv/add-rdv.component';
import { AddBeautifComponent } from './beauty/add-beautif/add-beautif.component';
import { AddPrestationComponent } from './beauty/add-prestation/add-prestation.component';
import { AddReviewComponent } from './beauty/add-review/add-review.component';
import { UpdateRdvComponent } from './beauty/update-rdv/update-rdv.component';
import { UpdateBeautifComponent } from './beauty/update-beautif/update-beautif.component';
import { UpdatePrestationComponent } from './beauty/update-prestation/update-prestation.component';
import { BlogViewComponent } from './blog/blog-view/blog-view.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"dashboard/:email",component:DashboardComponent, canActivate:[AuthGuard]},
  {path:"signup", component: SignupFormComponent },
  {path:"reset", component:ResetFormComponent},
  {path:"login", component:LoginFormComponent},
  //make a route for update profile
  {path:"blog",  component:BlogViewComponent },
  {path:"posts",  component:AllArticlesComponent, canActivate:[AuthGuard]},
  {path:"posts/new", component: NewArticleComponent, canActivate:[AuthGuard]},
  {path:"admin", component:AdministrationComponent, canActivate:[AuthGuard]},
  {path:"posts/edit", component:EditArticleComponent, canActivate:[AuthGuard]},
  {path:"posts/view", component:ViewArticleComponent, canActivate:[AuthGuard]},
  {path:"id/bibliographie", component: BibliographieComponent, canActivate:[AuthGuard]},
  {path:"beauty/faqs", component:FaqsComponent, canActivate:[AuthGuard]},
  {path:"beauty", component:BeautyPageComponent},
  {path:"about",component:AboutComponent},
  {path:"market", component:MarketSoonComponent},
  {path:"beauty/rendezvous", component:RdvComponent},
  {path:"beauty/beautifyers", component:BeautifyerComponent, canActivate:[AuthGuard]},
  {path:"beauty/reviews", component:ReviewComponent, canActivate:[AuthGuard]},
  {path:"beauty/faqs", component:FaqsComponent, canActivate:[AuthGuard]},
  {path:"beauty/prestations", component:PrestationComponent, canActivate:[AuthGuard]},
  {path:"beauty/rendezvous/add", component:AddRdvComponent, canActivate:[AuthGuard]},
  {path:"beauty/beautifyers/add", component: AddBeautifComponent, canActivate:[AuthGuard]},
  {path:"beauty/prestations/add", component:AddPrestationComponent, canActivate:[AuthGuard]},
  {path:"beauty/reviews/add", component:AddReviewComponent, canActivate:[AuthGuard]},
  {path:"beauty/rendezvous/update", component:UpdateRdvComponent, canActivate:[AuthGuard]},
  {path:"beauty/beautifyers/update", component:UpdateBeautifComponent, canActivate:[AuthGuard]},
  {path:"beauty/prestations/update", component:UpdatePrestationComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
