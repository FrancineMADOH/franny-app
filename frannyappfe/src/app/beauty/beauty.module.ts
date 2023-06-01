import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqsComponent } from './faqs/faqs.component';
import { FaqFormComponent } from './partials/faq-form/faq-form.component';
import { FaqCardComponent } from './partials/faq-card/faq-card.component';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { BeautifyerCardComponent } from './partials/beautifyer-card/beautifyer-card.component';
import { BeautifyerFormComponent } from './partials/beautifyer-form/beautifyer-form.component';
import { PrestationFormComponent } from './partials/prestation-form/prestation-form.component';
import { PrestationCardComponent } from './partials/prestation-card/prestation-card.component';
import { RdvCardComponent } from './partials/rdv-card/rdv-card.component';
import { RdvFormComponent } from './partials/rdv-form/rdv-form.component';
import { ReviewCardComponent } from './partials/review-card/review-card.component';
import { PrestationComponent } from './prestation/prestation.component';
import { ReviewComponent } from './review/review.component';
import { BeautifyerComponent } from './beautifyer/beautifyer.component';
import { RdvComponent } from './rdv/rdv.component';
import { BeautyPageComponent } from './beauty-page/beauty-page.component';
import { FormsModule } from '@angular/forms';
import { AddRdvComponent } from './add-rdv/add-rdv.component';
import { AddBeautifComponent } from './add-beautif/add-beautif.component';
import { AddPrestationComponent } from './add-prestation/add-prestation.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { UpdateRdvComponent } from './update-rdv/update-rdv.component';
import { UpdateBeautifComponent } from './update-beautif/update-beautif.component';
import { UpdatePrestationComponent } from './update-prestation/update-prestation.component';


@NgModule({
  declarations: [
    FaqsComponent,
    FaqFormComponent,
    FaqCardComponent,
    BeautifyerCardComponent,
    BeautifyerFormComponent,
    PrestationFormComponent,
    PrestationCardComponent,
    RdvCardComponent,
    RdvFormComponent,
    ReviewCardComponent,
    PrestationComponent,
    ReviewComponent,
    BeautifyerComponent,
    RdvComponent,
    BeautyPageComponent,
    AddRdvComponent,
    AddBeautifComponent,
    AddPrestationComponent,
    AddReviewComponent,
    UpdateRdvComponent,
    UpdateBeautifComponent,
    UpdatePrestationComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule,
    FormsModule
  ]
})
export class BeautyModule { }
