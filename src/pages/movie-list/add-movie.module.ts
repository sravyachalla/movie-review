import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMoviePage } from './add-movie';

@NgModule({
    declarations: [
        AddMoviePage,
    ],
    imports: [
        IonicPageModule.forChild(AddMoviePage),
    ],
    exports: [
        AddMoviePage
    ]
})
export class AddMoviePageModule {}