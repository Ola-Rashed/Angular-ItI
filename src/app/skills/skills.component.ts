import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills = [
    {content: "HTML"},

    {content: "CSS"},

    {content: "JAVASCRIPT"},

    {content: "WORDPRESS"}

    
  ]

  skillsName = [
    {name: "HTML"},

    {name: "CSS"},

    {name: "SASS"},

    {name: "PHP"}

    
  ]

  mySkills = [
    {
      width: "95%",
      prog: "85%"
    },

    {
      width: "90%",
      prog: "90%"
    },

    {
      width: "70%",
      prog: "70%"
    },

    {
      width: "50%",
      prog: "50%"
    },

    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
