export function assertThatExist<T>(value: unknown): asserts value is NonNullable<T> {
    if (value === undefined || value === null) {
        throw new Error(`${value} is incorrect!`);
    }
}
