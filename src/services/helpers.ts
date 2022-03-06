export { generateId };

function generateId(type: string): string {
    return `${type}-${+new Date()}-${Math.random()}`;
}
