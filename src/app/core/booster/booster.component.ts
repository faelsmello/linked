import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { ICard } from 'src/app/shared/interfaces/cards';
import { BoosterTransform } from 'src/app/shared/utils/booster-transform';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styleUrls: ['./booster.component.scss'],
})
export class BoosterComponent implements OnInit {
  public boosters: Array<ICard> = [];
  private code!: string;
  private count = 0;

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
      .subscribe((cards) => {
        this.count += cards.length;
        this.boosters = this.boosters.concat(cards);
        if (this.count < 30) {
          this.getBoosters();
        }
      });
  }
}
