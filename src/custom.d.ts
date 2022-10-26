// add type defintion for svg imports, source: https://stackoverflow.com/a/45887328/8936417
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}
