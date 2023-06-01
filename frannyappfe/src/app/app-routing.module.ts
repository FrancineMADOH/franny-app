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
  {path:"market", component:MarketSoonComponent},
  {path:"beauty/rendezvous", component:RdvComponent},
  {path:"beauty/beautifyers", component:BeautifyerComponent},
  {path:"beauty/reviews", component:ReviewComponent},
  {path:"beauty/faqs", component:FaqsComponent},
  {path:"beauty/prestations", component:PrestationComponent},
  {path:"beauty/rendezvous/add", component:AddRdvComponent},
  {path:"beauty/beautifyers/add", component: AddBeautifComponent},
  {path:"beauty/prestations/add", component:AddPrestationComponent},
  {path:"beauty/reviews/add", component:AddReviewComponent},
  {path:"beauty/rendezvous/update", component:UpdateRdvComponent},
  {path:"beauty/beautifyers/update", component:UpdateBeautifComponent},
  {path:"beauty/prestations/update", component:UpdatePrestationComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
