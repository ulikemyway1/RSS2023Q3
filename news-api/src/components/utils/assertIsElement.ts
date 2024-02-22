export function assertIsElement<T = HTMLElement>(value: unknown): asserts value is NonNullable<T> {
    if (value === undefined || value === null) {
        throw new Error(`${value} is not instaneof Element or null`);
    }
}
