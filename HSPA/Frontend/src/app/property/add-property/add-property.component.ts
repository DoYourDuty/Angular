import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, ViewChild, NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyFrom: NgForm;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  onBack(): void {
    this.route.navigate(['/']);
  }
  onSubmit(): void {
    console.log(this.addPropertyFrom);
  }
}
