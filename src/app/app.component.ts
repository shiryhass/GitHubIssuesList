import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issues-list';
  private apiurl = 'https://api.github.com/search/issues?q=stress+test+label:bug+language:scope=all&page=2&per_page=100';
  data: any = {};

  constructor(private http : Http){
    this.getIssues();
    this.getData();
  }
  getData(){
    return this.http.get(this.apiurl).pipe(map((res: Response) => res.json()))
  }
  getIssues(){
    this.getData().subscribe(data=> {
      console.log(data);
      this.data = data;
    })
  }
}
