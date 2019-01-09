import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {LipstickItem} from '../../../common/data/lipstick-item';
import {LipstickService} from '../../service/lipstick.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'lipstick-finder-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  private params: object;

  private lipsticks$: Observable<LipstickItem[]>;

  constructor(private lipstickService: LipstickService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.params = params;
      this.lipsticks$ = this.lipstickService.search(params.get('brands'), params.get('categories'), params.get('color'));
    });
  }

  back(): void {
    this.router.navigate(['/tabs/lipstick-finder']);
  }

}
