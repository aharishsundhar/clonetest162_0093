import { Component, OnInit } from '@angular/core';
import { DispathmaterailService } from './dispathmaterail.service';

@Component({
  selector: 'app-dispathmaterail',
  templateUrl: './dispathmaterail.component.html',
  styleUrls: ['./dispathmaterail.component.scss'],
})

export class DispathmaterailComponent implements OnInit {
    public production = {
        material: '',
        tools: '',
        price: '',
        quantity: '',
    }

    constructor (
        private dispathmaterailService: DispathmaterailService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.dispathmaterailService.GpCreate(this.production).subscribe(data => {
            this.production.material = ''
 	 	this.production.tools = ''
 	 	this.production.price = ''
 	 	this.production.quantity = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}