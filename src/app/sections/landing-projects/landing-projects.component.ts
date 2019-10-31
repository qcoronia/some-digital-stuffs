import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-projects',
  templateUrl: './landing-projects.component.html',
  styleUrls: ['./landing-projects.component.scss']
})
export class LandingProjectsComponent implements OnInit {

  @Input() public heading: string;
  @Input() public subHeading: string;
  @Input() public callToActionText: string;

  constructor() { }

  ngOnInit() {
  }

}
