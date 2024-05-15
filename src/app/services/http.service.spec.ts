import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

describe('HttpService', () => {
    let service: HttpService;
    let httpTestingController: HttpTestingController;

    afterEach(() => {
        httpTestingController.verify();
    });

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
        });
        service = TestBed.inject(HttpService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
