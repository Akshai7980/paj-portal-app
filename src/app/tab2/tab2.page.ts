import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  allDevices: any = [];
  showIndividual: boolean;
  individualDevice: any;
  displayMap: string;

  constructor(
    private common: CommonService,
    private token: TokenService,
    private api: ApiService,
  ) {}

  ngOnInit(): void {
    this.getDeviceDetails();
    this.showIndividual = false;
    this.displayMap = '../../assets/images/1.webp';
  }

  getDeviceDetails() {
    this.api.getMethod('device').subscribe((res: any) => {
      console.log('res:', res);
      if (res.success) {
        this.allDevices = res.success;
      }
    }, err => {
      console.log('err:',err);
    });
  }

  onClickShowAll() {
    this.showIndividual = false;
  }

  onClickMarker(device) {
    this.showIndividual = true;
    this.individualDevice = device;
  }

  onChangeMap(type: string) {
    if (type === 'DEFAULT') {
      this.displayMap = '../../assets/images/1.webp';
    } else if (type === 'SATELLITE') {
      this.displayMap = '../../assets/images/4.jpg';
    } else if (type === 'TERRAIN') {
      this.displayMap = '../../assets/images/3.webp';
    }
  }

}
