import { Byte } from '@angular/compiler/src/util';

export class Restaurant {
    restid:number;
    restname:string;
    restaddress:string;
    restphone:string;
    openTime:string;
	closeTime:string;
    active:boolean;
    lastModified:string;
    name:string;
    type:string;
	picByte:Byte[];
     img:string;
    constructor()
    {
    }
    /* constructor( restid:number,
        restname:string,
        restaddress:string,
        restphone:string,
        openTime:string,
        closeTime:string,
        active:boolean)
        {
            this.restid=restid;
            this.restname=restname;
            this.restaddress=restaddress;
            this.restphone=restphone;
            this.openTime=openTime;
            this.closeTime=closeTime;
            this.active=active;
        } */
}

