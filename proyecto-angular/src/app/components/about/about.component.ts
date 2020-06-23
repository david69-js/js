import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;
  public text: any;
  public all: any

  constructor() {
    this.title = "David Toj Alvarez";
    this.subtitle = "Aprendiendo Desarrollo Web";
    this.email = "da3909622@gmail.com";
    this.text = [
      {texto:"What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
    ];
    this.all= []

   }


  ngOnInit() {
    this.reco()
  }

  reco(){
    this.text.forEach((element) => {
      this.all.push(element.texto)
    });
  }

}
