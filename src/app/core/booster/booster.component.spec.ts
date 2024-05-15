import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterComponent } from './booster.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { of, throwError } from 'rxjs';
import {
    MOCK_ERROR,
    MOCK_RESPONSE_CARDS,
    MOCK_RESPONSE_SETS,
} from '../mock/blocks';

describe('BoosterComponent', () => {
    let component: BoosterComponent;
    let fixture: ComponentFixture<BoosterComponent>;
    let httpService: jasmine.SpyObj<HttpService>;

    beforeEach(() => {
        const activatedRouteStub = {
            snapshot: {
                params: { code: 'BFZ' },
            },
        };

        httpService = jasmine.createSpyObj('HttpService', {
            fetchListSets: of(MOCK_RESPONSE_SETS),
            fetchListBooter: of(MOCK_RESPONSE_CARDS),
        });

        TestBed.configureTestingModule({
            declarations: [BoosterComponent, LoadingComponent, ErrorComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers: [
                HttpService,
                { provide: ActivatedRoute, useValue: activatedRouteStub },
            ],
        });
        fixture = TestBed.createComponent(BoosterComponent);
        component = fixture.componentInstance;
        httpService = TestBed.inject(
            HttpService
        ) as jasmine.SpyObj<HttpService>;

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call getBoosters method', () => {
        const code = 'BFZ';
        const spy = spyOn(httpService, 'fetchListBooter').and.callThrough();
        httpService.fetchListBooter(code);
        expect(spy).toHaveBeenCalledWith(code);
    });

    it('should handle error response', () => {
        spyOn(httpService, 'fetchListBooter').and.returnValue(
            of(MOCK_RESPONSE_CARDS)
        );

        component.getBoosters();

        expect(httpService.fetchListBooter).toHaveBeenCalled();
        expect(component.boosters.length).toBe(30);
    });

    it('should set isError to true and objError on error response', () => {
        spyOn(httpService, 'fetchListBooter').and.returnValue(
            throwError(MOCK_ERROR)
        );
        component.getBoosters();
        expect(component.isError).toBe(true);
    });
});
