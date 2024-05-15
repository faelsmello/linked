import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorComponent } from './error.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MOCK_ERROR } from 'src/app/core/mock/blocks';

describe('ErrorComponent', () => {
    let component: ErrorComponent;
    let fixture: ComponentFixture<ErrorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ErrorComponent],
            imports: [RouterTestingModule],
        });
        fixture = TestBed.createComponent(ErrorComponent);
        component = fixture.componentInstance;
        component.error = MOCK_ERROR;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display error details', () => {
        component.error = MOCK_ERROR;
        fixture.detectChanges();

        const compiled = fixture.nativeElement;
        expect(compiled.querySelector('h4').textContent).toContain(
            MOCK_ERROR.status
        );
        expect(compiled.querySelector('p').textContent).toContain(
            MOCK_ERROR.error
        );
    });
});
