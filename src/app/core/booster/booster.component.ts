import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ICard } from 'src/app/shared/interfaces/cards';
import { IResponseError } from 'src/app/shared/interfaces/global';
import { BoosterTransform } from 'src/app/shared/utils/booster-transform';

@Component({
    selector: 'app-booster',
    templateUrl: './booster.component.html',
    styleUrls: ['./booster.component.scss'],
})
export class BoosterComponent implements OnInit {
    public boosters: Array<ICard> = [];
    public isLoading = true;
    public isError = false;
    public objError!: IResponseError;

    protected message = 'Abrindo os seus boosters. Aguarde!';

    private code!: string;
    private count = 0;
    private maxCount = 30;

    constructor(
        private _activatedRoute: ActivatedRoute,
        private httpService: HttpService
    ) {}

    public ngOnInit(): void {
        this.code = this._activatedRoute.snapshot.params['code'];
        this.getBoosters();
    }

    public getBoosters(): void {
        this.httpService
            .fetchListBooter(this.code)
            .pipe(map(BoosterTransform))
            .subscribe(
                (cards) => {
                    this.count += cards.length;
                    this.boosters = this.boosters.concat(cards);
                    if (this.count < 30) {
                        this.getBoosters();
                        return;
                    }

                    this.boosters.splice(29, this.count - this.maxCount);
                    this.isLoading = false;
                },
                (err) => {
                    this.isLoading = false;
                    this.isError = true;
                    this.objError = err.error;
                }
            );
    }
}
