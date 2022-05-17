import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../modules/screen/model/components/components.model";
import {GeneratorApiService} from "../../servers/generatorApi/generator-api.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [GeneratorApiService],
})
export class TableComponent implements OnInit {

  constructor(private readonly generatorApiService: GeneratorApiService) {
  }

  ngOnInit(): void {
    if (this.cms.api) {
      this.generatorApiService.generatorApi(this.cms.api, {}, {}).subscribe((data:any)=>{
        console.log(data);
      });
    }
  }

  @Input() cms: ComponentsModel = {};
}
