/* eslint-disable no-var */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable curly */
/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, ElementRef, ViewChild } from '@angular/core';
// import {
//   GoogleMap,
//   GoogleMaps,
//   LatLng,
//   CameraPosition,
//   GoogleMapsEvent,
// } from '@ionic-native/google-maps';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Platform } from '@ionic/angular';
// declare var google;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  // latitude: any;
  // longitude: any;
  // map: any;
  // address: string;
  // @ViewChild('map', { static: false }) mapElement: ElementRef;

  constructor(
    // public googleMaps: GoogleMaps,
    // private geolocation: Geolocation,
    // private nativeGeocoder: NativeGeocoder
    public platform: Platform,
  ) {}

  // ngAfterViewInit() {
  //   this.loadMap();
  // }

  // loadMap() {
  //   this.geolocation
  //     .getCurrentPosition()
  //     .then((resp) => {
  //       this.latitude = resp.coords.latitude;
  //       this.longitude = resp.coords.longitude;

  //       let latLng = new google.maps.LatLng(
  //         resp.coords.latitude,
  //         resp.coords.longitude
  //       );
  //       let mapOptions = {
  //         center: latLng,
  //         zoom: 15,
  //         mapTypeId: google.maps.MapTypeId.ROADMAP,
  //       };

  //       // this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

  //       this.map = new google.maps.Map(
  //         this.mapElement.nativeElement,
  //         mapOptions
  //       );

  //       this.map.addListener('dragend', () => {
  //         this.latitude = this.map.center.lat();
  //         this.longitude = this.map.center.lng();

  //         // this.getAddressFromCoords(
  //         //   this.map.center.lat(),
  //         //   this.map.center.lng()
  //         // );
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('Error getting location', error);
  //     });
  // }

  // getAddressFromCoords(lattitude, longitude) {
  //   console.log('getAddressFromCoords ' + lattitude + ' ' + longitude);
  //   let options: NativeGeocoderOptions = {
  //     useLocale: true,
  //     maxResults: 5,
  //   };

  //   this.nativeGeocoder
  //     .reverseGeocode(lattitude, longitude, options)
  //     .then((result: NativeGeocoderResult[]) => {
  //       this.address = '';
  //       let responseAddress = [];
  //       for (let [key, value] of Object.entries(result[0])) {
  //         if (value.length > 0) responseAddress.push(value);
  //       }
  //       responseAddress.reverse();
  //       for (let value of responseAddress) {
  //         this.address += value + ', ';
  //       }
  //       this.address = this.address.slice(0, -2);
  //     })
  //     .catch((error: any) => {
  //       this.address = 'Address Not Available!';
  //     });
  // }

}
