interface IAsarFs {
    new(asarArchivePath:string):IAsarFs;
    patch():IAsarFs;
    unpatch():IAsarFs;
}

declare var asarFs:IAsarFs;

export = asarFs;
