export type Handler = (filePath:string) => (...args:any[]) => void;
