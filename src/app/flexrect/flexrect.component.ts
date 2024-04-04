import { Component, HostListener, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit() {
    this.x = 30;
    this.y = 30;
    this.height = 50;
    this.width = 50;
  }

  onMouseDown(event: MouseEvent,corner: string): void {
    this.isResizing = true;
    this.resizeCorner = corner;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    
  }




}


