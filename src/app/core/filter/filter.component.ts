import { Component } from '@angular/core';
import { BLOCKS } from '../mock/blocks';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
import { ISet } from 'src/app/shared/interfaces/sets';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    public formFilter!: FormGroup;
    public sets: Array<ISet> = [];
    public isLoading = false;
    protected blocks: Array<string> = BLOCKS;

    constructor(
        private readonly _fb: FormBuilder,
        private readonly _router: Router,
        private readonly httpService: HttpService
    ) {
        this.formFilter = this._fb.group({
            name: new FormControl(null),
            block: new FormControl(null, Validators.required),
        });
    }

    public search(): void {
        this.isLoading = true;
        const { name, block } = this.formFilter.value;
        const query = `${block}${name ? '|' + name : ''}`;

        this.httpService
            .fetchListSets(query)
            .pipe(finalize(() => (this.isLoading = false)))
            .subscribe(({ sets }) => {
                this.sets = sets;
            });
    }

    public goBooster(code: string): void {
        this._router.navigate(['booster', code]);
    }
}
