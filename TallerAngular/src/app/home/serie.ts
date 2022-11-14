export class Serie{
    private id: number;
    private name: string;
    private channel: string;
    private seasons: number;
    private description: string;
    private webpage: string;
    private poster : string;
    constructor(id:number, name:string, channel:string, seasons:number,  description:string, webpage:string, poster:string){
        this.id = id;
        this.name = name;
        this.channel =channel;
        this.seasons=seasons;
        this.description = description;
        this.webpage = webpage
        this.poster =  poster;

    }
    public getId():number{
        return this.id;
    }
    public getchannel(): string{
        return this.channel;
    }
    public getdescription(): string{
        return this.description;
    }
    public getwebpage(): string{
        return this.webpage;
    }
    public getseasons(){
        return this.seasons;
    }
    public getName(): string{
        return this.name;
    }
    public getposter(): string{
        return this.poster;
    }
}
