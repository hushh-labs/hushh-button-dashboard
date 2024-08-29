declare module 'qs' {
    export function stringify(
      obj: any,
      options?: {
        addQueryPrefix?: boolean;
        allowDots?: boolean;
        arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma';
        charset?: 'utf-8' | 'iso-8859-1';
        delimiter?: string;
        encode?: boolean;
        encoder?: (str: string) => string;
        encodeValuesOnly?: boolean;
        filter?: Array<string> | ((prefix: string, value: any) => any);
        format?: 'RFC1738' | 'RFC3986';
        indices?: boolean;
      }
    ): string;
  
    export function parse(
      str: string,
      options?: {
        allowDots?: boolean;
        allowPrototypes?: boolean;
        arrayLimit?: number;
        charset?: 'utf-8' | 'iso-8859-1';
        charsetSentinel?: boolean;
        comma?: boolean;
        decoder?: (str: string) => string;
        depth?: number;
        delimiter?: string;
        ignoreQueryPrefix?: boolean;
        parameterLimit?: number;
        parseArrays?: boolean;
        plainObjects?: boolean;
        strictNullHandling?: boolean;
      }
    ): any;
  }
  