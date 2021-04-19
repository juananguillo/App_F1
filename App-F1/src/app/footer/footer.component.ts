import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer={
    autor: 'Juan Antonio Guilló López',
    empresa: 'Everis'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
