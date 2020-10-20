export function noRepeatCharacter(str: string): string {
    if (!str) return null;
    const mp = new Map<string, number>();
    str.split('').forEach(s => {
        const rep = mp.get(s) ? mp.get(s) + 1: 1;
        mp.set(s, rep);
    });
    for (const entry of mp.entries()) {
        if (entry[1] === 1) return entry[0];
    }
    return null;
}