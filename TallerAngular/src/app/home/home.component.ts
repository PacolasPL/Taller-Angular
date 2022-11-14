import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  series: Array<Serie> =[];
  selectedSrs!: Serie;
  selected: Boolean = false;
  constructor(private serieService: SerieService) { }
  getSeries(){
   this.serieService.getSeries().subscribe({next: srs=> this.series = srs, error:e=>console.error(e)})
  }
  onSelected(serie: number): void {
    this.selected = true;
    this.selectedSrs = this.series[serie];
  }


  ngOnInit() {
    this.getSeries();
  }

}
