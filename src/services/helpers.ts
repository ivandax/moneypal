export { generateId };

function generateId(): string {
    return `id-${+new Date()}-${Math.random()}`;
}
