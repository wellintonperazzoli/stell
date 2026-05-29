import * as React from 'react';
import { styled } from '@mui/system';


const Table = () => {
    return (
        <Root>
            <table>
                <thead>
                    <tr>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.desc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Root>
    );
}


export default Table;


const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};

const Root = styled('div')(
    ({ theme }) => `


    table {
      font-family: 'IBM Plex Sans', sans-serif;
      font-size: 0.875rem;
      border-collapse: collapse;
      width: 100%;
    }
  
    td,
    th {
      border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
      text-align: left;
      padding: 8px;
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
  
    th {
      background-color: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    }
    `,
);


const data = [
    {
        desc: 'Zombie Walk - E fantasiado!',
    },
    {
        desc: 'Primeira vez num bar de Gelo',
    },
    {
        desc: 'Gelatina alcoólica',
    },
    {
        desc: 'Subir fora do teto solar gritando pela cidade',
    },
    {
        desc: 'Parque de diversões na praia',
    },
    {
        
    },
]