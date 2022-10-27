export const updateArrayAtIndex = (array: any[], element: any, index: number) => {
    return [...array.slice(0, index), element, ...array.slice(index + 1)];
};
