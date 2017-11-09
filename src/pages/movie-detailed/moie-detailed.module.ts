import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieDetailedPage } from './movie-detailed';

@NgModule({
    declarations: [
        MovieDetailedPage,
    ],
    imports: [
        IonicPageModule.forChild(MovieDetailedPage),
    ],
    exports: [
        MovieDetailedPage
    ]
})
export class MovieDetailedPageModule {}