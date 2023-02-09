import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  showDiv1 = true;
  showDiv2 = false;
  showDiv3 = false;
  showDiv4 = false;
  showDiv5 = false;


  constructor() {
  }

  ngOnInit(): void {
    var button = document.getElementById("tab-0");
    button!.style.borderLeftColor = "#64ffda"

    button!.style.color = "#64ffda"

  }

  side() {
    if (this.showDiv1 = true) {
      var button = document.getElementById("tab-0");
      var button1 = document.getElementById("tab-1");
      var button2 = document.getElementById("tab-2");
      var button3 = document.getElementById("tab-3");
      var button4 = document.getElementById("tab-4");

      button!.style.borderLeftColor = "#64ffda"
      button1!.style.borderLeftColor = "#233554"
      button2!.style.borderLeftColor = "#233554"
      button3!.style.borderLeftColor = "#233554"
      button4!.style.borderLeftColor = "#233554"

      button!.style.color = "#64ffda"

      button1!.style.color = "#8892b0"

      button2!.style.color = "#8892b0"

      button3!.style.color = "#8892b0"

      button4!.style.color = "#8892b0"

    }

  }

  side1() {
    if (this.showDiv2 = true) {
      var button = document.getElementById("tab-0");
      var button1 = document.getElementById("tab-1");
      var button2 = document.getElementById("tab-2");
      var button3 = document.getElementById("tab-3");
      var button4 = document.getElementById("tab-4");

      button!.style.borderLeftColor = "#233554"
      button1!.style.borderLeftColor = "#64ffda"
      button2!.style.borderLeftColor = "#233554"
      button3!.style.borderLeftColor = "#233554"
      button4!.style.borderLeftColor = "#233554"



      button!.style.color = "#8892b0"

      button1!.style.color = "#64ffda"

      button2!.style.color = "#8892b0"

      button3!.style.color = "#8892b0"

      button4!.style.color = "#8892b0"
    }
  }
  side2() {
    if (this.showDiv3 = true) {
      var button = document.getElementById("tab-0");
      var button1 = document.getElementById("tab-1");
      var button2 = document.getElementById("tab-2");
      var button3 = document.getElementById("tab-3");
      var button4 = document.getElementById("tab-4");

      button!.style.borderLeftColor = "#233554"
      button1!.style.borderLeftColor = "#233554"
      button2!.style.borderLeftColor = "#64ffda"
      button3!.style.borderLeftColor = "#233554"
      button4!.style.borderLeftColor = "#233554"




      button!.style.color = "#8892b0"

      button1!.style.color = "#8892b0"

      button2!.style.color = "#64ffda"

      button3!.style.color = "#8892b0"

      button4!.style.color = "#8892b0"
    }
  }
  side3() { if (this.showDiv4 = true) {
    var button = document.getElementById("tab-0");
    var button1 = document.getElementById("tab-1");
    var button2 = document.getElementById("tab-2");
    var button3 = document.getElementById("tab-3");
    var button4 = document.getElementById("tab-4");

    button!.style.borderLeftColor = "#233554"
    button1!.style.borderLeftColor = "#233554"
    button2!.style.borderLeftColor = "#233554"
    button3!.style.borderLeftColor = "#64ffda"
    button4!.style.borderLeftColor = "#233554"





    button!.style.color = "#8892b0"

      button1!.style.color = "#8892b0"

      button2!.style.color = "#8892b0"

      button3!.style.color = "#64ffda"

      button4!.style.color = "#8892b0"
  }
  }
  side4() {
    if (this.showDiv5 = true) {
      var button = document.getElementById("tab-0");
      var button1 = document.getElementById("tab-1");
      var button2 = document.getElementById("tab-2");
      var button3 = document.getElementById("tab-3");
      var button4 = document.getElementById("tab-4");

      button!.style.borderLeftColor = "#233554"
      button1!.style.borderLeftColor = "#233554"
      button2!.style.borderLeftColor = "#233554"
      button3!.style.borderLeftColor = "#233554"
      button4!.style.borderLeftColor = "#64ffda"




      button!.style.color = "#8892b0"

      button1!.style.color = "#8892b0"

      button2!.style.color = "#8892b0"

      button3!.style.color = "#8892b0"

      button4!.style.color = "#64ffda"
    }
  }

}