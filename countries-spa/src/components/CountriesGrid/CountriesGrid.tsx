import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';

export interface IGridProps {
    rowData: any[] | undefined;
}

export const CountriesGrid: React.FC<IGridProps> = (props: IGridProps) => {
    const [expandedRow, setExpandedRow] = useState<any | null>(null);

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
                return params.data && params.data.languages
                    ? Object.values(params.data.languages).join(', ')
                    : '';
            },
            sortable: true,
            filter: true,
        },
        {
            headerName: 'Currencies',
            field: 'currencies',
            valueGetter: (params: any) => {
                const currencies = params.data?.currencies;
                
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

    const onRowClicked = (event: any) => {
        const clickedRow = event.data;
        setExpandedRow(clickedRow === expandedRow ? null : clickedRow);
    };

    return (
        <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
            <AgGridReact
                rowData={props.rowData}
                columnDefs={columnDefs}
                defaultColDef={{ resizable: true, sortable: true, filter: true }}
                onRowClicked={onRowClicked}
                getRowHeight={(params) => (params.data === expandedRow ? 150 : 50)} // Adjust row height based on expansion
            />
            {expandedRow && (
                <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                    <h3>Details for {expandedRow.name.common}</h3>
                    <p>Region: {expandedRow.region}</p>
                    <p>Subregion: {expandedRow.subregion}</p>
                    <p>Population: {expandedRow.population}</p>
                    <p>Area: {expandedRow.area} km²</p>
                    <p>Capital: {expandedRow.capital && expandedRow.capital.join(', ')}</p>
                    <p>Bordering Countries: {expandedRow.borders && expandedRow.borders.join(', ')}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </div>
    );
};
