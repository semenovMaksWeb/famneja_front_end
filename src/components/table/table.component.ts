import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../modules/screen/model/components/components.model";
import {GeneratorApiService} from "../../servers/generatorApi/generator-api.service";
import {StoreTableSaveDataset} from "../../store/screen/screen.actinons";
import {Store} from "@ngrx/store";
import {State} from "../../store";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [GeneratorApiService],
})
export class TableComponent implements OnInit {

  constructor(private store: Store<State>, private readonly generatorApiService: GeneratorApiService) {
  }

  ngOnInit(): void {
    if (this.cms.api && !this.cms.dataset) {
      this.generatorApiService.generatorApi(this.cms.api, {}, {}).subscribe((data: any) => {
        if (this.cms.id != undefined) {
         this.store.dispatch(new StoreTableSaveDataset({key: this.cms.id.toString(), value: data}));
        }
      });
    }
  }

  @Input() cms: ComponentsModel = {};
}
