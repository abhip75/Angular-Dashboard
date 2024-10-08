import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  // Bar Chart Data
  public barChartData = [
    {
      "name": "January",
      "value": 65
    },
    {
      "name": "February",
      "value": 59
    },
    {
      "name": "March",
      "value": 80
    },
    {
      "name": "April",
      "value": 81
    },
    {
      "name": "May",
      "value": 56
    },
    {
      "name": "June",
      "value": 55
    },
    {
      "name": "July",
      "value": 40
    }
  ];

  // Pie Chart Data
  public pieChartData = [
    {
      "name": "Completed",
      "value": 3500
    },
    {
      "name": "Ongoing",
      "value": 215
    }
  ];

  // View size for responsiveness
  view: [number, number] = [700, 400];
}
