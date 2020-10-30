import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.Interface';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
  // public property1: IProperty;

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService,
    private router: Router
  ) {
    // this.propertyId = Number(this.route.snapshot.params['id']);
    // console.log('propertyId' + this.propertyId);
    // this.housingService.getProperty(this.propertyId).subscribe(
    //   (data) => {
    //     this.property1 = data;
    //     console.log('property1' + this.property1);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  onSelectNext() {
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId]);
    // To make relative path
    // this.router.navigate(['property-detail', this.propertyId], {relativeTo: this.route});
  }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.params.subscribe((params)=>{
      this.propertyId = +params['id'];
    });
  }
}
