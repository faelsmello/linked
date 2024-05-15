import { ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FilterComponent } from '../filter/filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlocksComponent } from 'src/app/shared/components/blocks/blocks.component';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [HomeComponent, FilterComponent, BlocksComponent],
            imports: [HttpClientTestingModule, ReactiveFormsModule],
        });
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
