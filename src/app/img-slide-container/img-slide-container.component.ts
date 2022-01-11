import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slide-container',
  templateUrl: './img-slide-container.component.html',
  styleUrls: ['./img-slide-container.component.scss']
})
export class ImgSlideContainerComponent implements OnInit {

  //array für die Bilder
  images = ['1.jpeg', 
  '2.jpeg', 
  '3.jpeg'];

  // Überschrigten für die Bilder ändern
  headline = ['Bringen Sie Technik auf das nächste Level!', 
  'Jeden Tag mehr!',
   'Grenzenlos'];
   
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
