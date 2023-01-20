import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cat } from 'src/app/models/cat.model';
import { AuthService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  limitControl: FormControl = new FormControl(5);
  cats: Cat[] = [];
  //TODO: Acabar la página
  constructor(
    public catservice: AuthService
  ) { }


  search(): void {
    const limit: number = (this.limitControl.value);
    this.catservice.getCats(limit).subscribe({
      next: (value: Cat[]) => {
        this.cats = [];
        this.cats = value;
      }
    })
  }

}
