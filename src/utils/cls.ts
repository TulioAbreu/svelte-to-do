export function cls(...args: string[]): string {
    return args.filter((str) => str).join(" ");
}
