export interface Group{
    name:string;
    connections:Conneciton[];
}

interface Conneciton{
    connectionId:string;
    username:string;
}