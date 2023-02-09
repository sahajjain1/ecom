import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() {

  }
  ngOnInit(): void {
    var lastScrollTop = 0;
    var navbar = document.getElementById('main');
    window.addEventListener('scroll', function () {
      var scrollTop = this.window.pageXOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar!.style.top = "-80px"
      }
      else{
        navbar!.style.top ="0"
      }
      lastScrollTop = scrollTop;
    })
  }
toTop() {
   var about = document.getElementById("about1")
 about!.scrollIntoView();
}
toTop1() {
   var about = document.getElementById("work1")
 about!.scrollIntoView();
}
toTop2() {
  var about = document.getElementById("exp1")
about!.scrollIntoView();
}
toTop3() {
  var about = document.getElementById("contact1")
about!.scrollIntoView();
}

}