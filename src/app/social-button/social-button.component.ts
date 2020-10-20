import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-social-button',
  templateUrl: './social-button.component.html',
  styleUrls: ['./social-button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SocialButtonComponent implements OnChanges {

  @Input() provider:string;
  @Input() link:string;
  public providerLink: string;

  constructor() { }

  ngOnChanges(): void {
    this.providerLink= `fab fa-${this.provider}`;
  }

  ngOnInit(): void {
  }

}
