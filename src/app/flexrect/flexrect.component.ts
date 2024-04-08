import { Component, HostListener, OnInit } from '@angular/core';
import { PersistenceService } from '../persistence.service';

@Component({
  selector: 'app-flexrect',
  standalone: true,
  imports: [],
  templateUrl: './flexrect.component.html',
  styleUrl: './flexrect.component.css'
})
export class FlexrectComponent implements OnInit {


  public x: number = 0;
  public y: number = 0;
  public height: number = 0;
  public width: number = 0;
  public isResizing: boolean = false;
  public resizeCorner: string = "";
  public mouseClickX: number = 0;
  public mouseClickY: number = 0;
  public cornerSize: number = 0;
  public perimeter: number = 0;

  constructor(
    private persistence:PersistenceService) {}

  ngOnInit() {
    this.getRectangle();
    this.cornerSize = 10;
  }

  onMouseDown(event: MouseEvent,corner: string): void {
    this.isResizing = true;
    this.resizeCorner = corner;
    this.mouseClickX = event.clientX;
    this.mouseClickY = event.clientY;
  }

  onMouseMove(event: MouseEvent): void {
    if(this.isResizing == false){
      return;
    }

    const deltaX = event.clientX - this.mouseClickX;
    const deltaY = event.clientY - this.mouseClickY;

    if (this.resizeCorner == "topRight"){
      this.height -= deltaY;
      this.width += deltaX;
      this.y += deltaY;      
    }

    if (this.resizeCorner == "bottomRight"){
      this.height += deltaY;
      this.width += deltaX;  
    }

    if (this.resizeCorner == "topLeft"){
      this.y += deltaY;
      this.x += deltaX;
      this.width -= deltaX;
      this.height -= deltaY;  
    }

    if (this.resizeCorner == "bottomLeft"){
      this.x += deltaX;
      this.width -= deltaX;
      this.height += deltaY;    
    }



      this.mouseClickX = event.clientX;
      this.mouseClickY = event.clientY;

      this.perimeter = this.calculatePerimeter();
  }

  onMouseUp(): void {
    this.isResizing = false;
    this.persistence.updateRectangle({x:this.x,y:this.y,width:this.width,height:this.height})
    .subscribe();
  }

  calculatePerimeter(): number {
    return ((this.height+this.width)*2);
  }

  getRectangle(): void{
    this.persistence.getRectangle().subscribe(
      rectangle => {
        this.x = rectangle.x;
        this.y = rectangle.y;
        this.height = rectangle.height;
        this.width = rectangle.width;
        this.perimeter = this.calculatePerimeter();
      }
    )
    ;

  }

  




}


