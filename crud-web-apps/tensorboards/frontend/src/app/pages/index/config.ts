import {
  PropertyValue,
  StatusValue,
  ActionListValue,
  ActionIconValue,
  ActionButtonValue,
  TableColumn,
  TRUNCATE_TEXT_SIZE,
  TableConfig,
  DateTimeValue,
} from 'kubeflow';

const tableConfig: TableConfig = {
  title: $localize`Tensorboards`,
  newButtonText: $localize`NEW TENSORBOARD`,
  columns: [
    {
      matHeaderCellDef: $localize`Status`,
      matColumnDef: 'status',
      value: new StatusValue(),
    },
    {
      matHeaderCellDef: $localize`Name`,
      matColumnDef: 'name',
      value: new PropertyValue({
        field: 'name',
        tooltipField: 'name',
        truncate: TRUNCATE_TEXT_SIZE.SMALL,
      }),
    },
    {
      matHeaderCellDef: $localize`Age`,
      matColumnDef: 'age',
      value: new DateTimeValue({
        field: 'age',
      }),
    },
    {
      matHeaderCellDef: $localize`Logspath`,
      matColumnDef: 'logspath',
      value: new PropertyValue({
        field: 'logspath',
        tooltipField: 'logspath',
        truncate: TRUNCATE_TEXT_SIZE.SMALL,
      }),
    },
  ],
};

const actionsCol: TableColumn = {
  matHeaderCellDef: '',
  matColumnDef: 'actions',
  value: new ActionListValue([
    new ActionButtonValue({
      name: 'connect',
      tooltip: $localize`Connect to the Tensorboaard Server`,
      color: 'primary',
      field: 'connectAction',
      text: $localize`CONNECT`,
    }),
    new ActionIconValue({
      name: 'delete',
      tooltip: $localize`Delete Tensorboard`,
      color: 'warn',
      field: 'deleteAction',
      iconReady: 'material:delete',
    }),
  ]),
};

export const defaultConfig = {
  title: tableConfig.title,
  newButtonText: tableConfig.newButtonText,
  columns: tableConfig.columns.concat(actionsCol),
};
