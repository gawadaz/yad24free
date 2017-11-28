import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  items: { desc: string, image:string }[] = [
    { desc: "first item", image: "http://1.bp.blogspot.com/-H3xFUgDh8wU/Vj7h8O2xdqI/AAAAAAAAAh4/gk-gBPFf-wU/s1600/The%2BBox.jpg" },
    { desc: "second item", image: "http://1.bp.blogspot.com/-H3xFUgDh8wU/Vj7h8O2xdqI/AAAAAAAAAh4/gk-gBPFf-wU/s1600/The%2BBox.jpg" },
    { desc: "third item", image: "http://1.bp.blogspot.com/-H3xFUgDh8wU/Vj7h8O2xdqI/AAAAAAAAAh4/gk-gBPFf-wU/s1600/The%2BBox.jpg" },
    { desc: "forth item", image: "http://1.bp.blogspot.com/-H3xFUgDh8wU/Vj7h8O2xdqI/AAAAAAAAAh4/gk-gBPFf-wU/s1600/The%2BBox.jpg" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
