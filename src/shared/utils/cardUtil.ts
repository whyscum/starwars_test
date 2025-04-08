export class CardUtil{
    static isKnown (value?: string): boolean  {
        return !!value && value !== 'unknown' && value !== 'n/a' && value !== 'none';
    };
}