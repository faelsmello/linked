import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { HttpService } from 'src/app/services/http.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BlocksComponent } from 'src/app/shared/components/blocks/blocks.component';
import { Router } from '@angular/router';
import { MOCK_RESPONSE_CARDS, MOCK_RESPONSE_SETS } from '../mock/blocks';
import { of } from 'rxjs';

describe('FilterComponent', () => {
    let component: FilterComponent;
    let fixture: ComponentFixture<FilterComponent>;
    let httpService: jasmine.SpyObj<HttpService>;
    let router: Router;

    beforeEach(async () => {
        httpService = jasmine.createSpyObj('HttpService', {
            fetchListSets: of(MOCK_RESPONSE_SETS),
            fetchListBooter: of(MOCK_RESPONSE_CARDS),
        });

        await TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, HttpClientTestingModule],
            declarations: [FilterComponent, BlocksComponent],
            providers: [FormBuilder, HttpService],
        });
        fixture = TestBed.createComponent(FilterComponent);
        component = fixture.componentInstance;
        httpService = TestBed.inject(
            HttpService
        ) as jasmine.SpyObj<HttpService>;
        router = TestBed.inject(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call search method', () => {
        const block = 'Ixalan';
        const name = 'name';

        const query = `${block}${name ? '|' + name : ''}`;
        component.formFilter.controls['block'].setValue(block);
        component.formFilter.controls['name'].setValue(name);
        const spy = spyOn(httpService, 'fetchListSets').and.callThrough();
        component.search;
        httpService.fetchListSets(query);
        expect(spy).toHaveBeenCalledWith(query);
    });

    it('should call search method name empty', () => {
        const block = 'Ixalan';
        component.formFilter.controls['block'].setValue(block);
        const spy = spyOn(httpService, 'fetchListSets').and.callThrough();
        component.search;
        httpService.fetchListSets(block);
        expect(spy).toHaveBeenCalledWith(block);
    });

    it('should navigate to "game" on goToPlay()', () => {
        const navigateSpy = spyOn(router, 'navigate').and.stub();
        const code = 'BFZ';

        component.goBooster(code);

        expect(navigateSpy).toHaveBeenCalledWith(['booster', code]);
    });

    it('should set isLoading to false after fetchListSets', () => {
        component.search();
        expect(component.isLoading).toBe(true);
    });

    it('should set sets with the result of fetchListSets', () => {
        spyOn(httpService, 'fetchListSets').and.returnValues(
            of(MOCK_RESPONSE_SETS)
        );
        component.search();
        expect(component.sets).toEqual(MOCK_RESPONSE_SETS.sets);
    });
});
