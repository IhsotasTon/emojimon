import { mudConfig } from '@latticexyz/world/register';

export default mudConfig({
    enums: {
        // TODO
    },
    tables: {
        // TODO
        Movable: 'bool',
        Player: 'bool',
        Position: {
            dataStruct: false,
            valueSchema: {
                x: 'uint32',
                y: 'uint32',
            },
        },
    },
});
