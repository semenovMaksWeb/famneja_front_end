import {Component, Input, OnInit} from '@angular/core';
import {ComponentsModel} from "../../modules/screen/model/components/components.model";
import {GeneratorApiService} from "../../servers/generatorApi/generator-api.service";
import {StoreTableSaveDataset} from "../../store/screen/screen.actinons";
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {GeneratorClassService} from "../../servers/class/generator-class.service";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  providers: [GeneratorApiService, GeneratorClassService],
})
export class TableComponent implements OnInit {
  className: string = "";

  constructor(
    private store: Store<State>,
    private readonly generatorApiService: GeneratorApiService,
    private readonly generatorClassService: GeneratorClassService
  ) {
  }

  ngOnInit(): void {
    console.log("ngOnInit table")
    if (this.cms.api && !this.cms.dataset) {
      this.generatorApiService.generatorApi(this.cms.api, {}, {}).subscribe((data: any) => {
        if (this.cms.id != undefined) {
          this.store.dispatch(new StoreTableSaveDataset({key: this.cms.id.toString(), value: data}));
        }
      });
    }
    if (!this.className){
      this.className = this.generatorClassService.generatorClass(this?.cms?.class);
    }
  }

  @Input() cms: ComponentsModel = {};
}
