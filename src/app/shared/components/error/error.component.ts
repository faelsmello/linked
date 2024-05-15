import { Component, Input } from '@angular/core';
import { IResponseError } from '../../interfaces/global';

@Component({
    selector: 'app-error',
    template: `
        <div class="container-error">
            <h4>Erro: {{ error.status }}</h4>
            <p>{{ error.error }}</p>
            <button [routerLink]="['/']">voltar</button>
        </div>
    `,
    styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
    @Input() public error!: IResponseError;
}
