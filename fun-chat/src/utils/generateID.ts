export default function generateId(): string {
    const time = new Date().getTime();
    const arr = [
        Math.floor(Math.random() * time),
        Math.floor(Math.random() * time),
        Math.floor(Math.random() * time),
    ];
    return arr.join('-');
}
