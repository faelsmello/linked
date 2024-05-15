import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-loading',
    template: `
        <div class="container-load">
            <div class="spinner"></div>
            <ng-container *ngIf="message">
                <p>{{ message }}</p>
            </ng-container>
        </div>
    `,
    styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
    @Input() public message!: string;
}
