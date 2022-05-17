import {ComponentsSchemaTableModel} from "../../../modules/screen/model/components/componentsSchemaTable.model";

export function AllStyle(schema?:ComponentsSchemaTableModel):any{
  if (schema?.w) {
   return  {
      'width': `${schema?.w}px`
    }
  }
}
