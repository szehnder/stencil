
export const isDef = (v: any) => v !== undefined && v !== null;

export const isUndef = (v: any) => v === undefined || v === null;

export const isArray = (v: any): v is Array<any> => Array.isArray(v);

export const isObject = (v: any): v is Object => v !== null && typeof v === 'object';

export const isBoolean = (v: any): v is boolean => typeof v === 'boolean';

export const isString = (v: any): v is string => typeof v === 'string';

export const isNumber = (v: any): v is number => typeof v === 'number';

export const toLowerCase = (str: string) => str.toLowerCase();

export const toDashCase = (str: string) => str.replace(/([A-Z])/g, (g) => '-' + toLowerCase(g[0]));

export const dashToPascalCase = (word: string) => word.split('-').map(segment => segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()).join('');

export const noop = (): any => {};

export const getModuleStaticProperty = (module: any, key: string) => module.constructor[key];
