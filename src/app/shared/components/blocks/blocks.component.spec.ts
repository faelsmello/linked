import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';

describe('BlocksComponent', () => {
    let component: BlocksComponent;
    let fixture: ComponentFixture<BlocksComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BlocksComponent],
        });
        fixture = TestBed.createComponent(BlocksComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should call getBoosters methode', () => {
        const code = 'BFZ';
        const spy = spyOn(component, 'getBoosters').and.callThrough();

        component.getBoosters(code);
        expect(spy).toHaveBeenCalledWith(code);
    });
});
