import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  //array für die Bilder
   images = ['1.jpeg', '2.jpeg', '3.jpeg'];
   currentImage = 0;
   showImage = true;

   // um die datei auszuführen
   ngOnInit(){
     this.updateImage();

   }

   // funktion um bilder zu laden 
updateImage(){
// Bilder austauschen
  setInterval(()=>{
    this.currentImage++;
    this.currentImage = this.currentImage % this.images.length;
    this.showImage = false;

    setTimeout(() =>{
      this.showImage = true;
    }, 10);

  }, 8000);

  
}     
}

  