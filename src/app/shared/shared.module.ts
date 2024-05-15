import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocksComponent } from './components/blocks/blocks.component';
import { ErrorComponent } from './components/error/error.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [BlocksComponent, LoadingComponent, ErrorComponent],
    imports: [CommonModule, RouterModule],
    exports: [BlocksComponent, LoadingComponent, ErrorComponent],
})
export class SharedModule {}
