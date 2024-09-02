/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';

export interface IGridProps {
    rowData: any[] | undefined;
}

export const CountriesGrid: React.FC<IGridProps> = (props: IGridProps) => {
    // Define the column definitions
    const columnDefs: ColDef[] = [
        { headerName: 'Name', field: 'name.common', sortable: true, filter: true },
        {
            headerName: 'Flag',
            field: 'flags.svg',
            cellRenderer: (params: any) => {
                return <img src={params.value} alt="flag" style={{ width: '30px', height: '20px' }} />;
            },
        },
        {
            headerName: 'Languages',
            field: 'languages',
            valueGetter: (params: any) => {
                return Object.values(params.data.languages).join(', ');
            },
            sortable: true,
            filter: true,
        },
        {
            headerName: 'Currencies',
            field: 'currencies',
            valueGetter: (params: any) => {
              const currencies = params.data.currencies;
              
              if (!currencies) {
                  return ''; 
              }
          
              return Object.values(currencies)
                  .map((currency: any) => `${currency.name} (${currency.symbol})`)
                  .join(', ');
          },          
            sortable: true,
            filter: true,
        },
    ];

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={props.rowData}
                columnDefs={columnDefs}
                defaultColDef={{ resizable: true, sortable: true, filter: true }}
            />
        </div>
    );
};
