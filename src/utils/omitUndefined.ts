export const omitUndefined = (object: any) => {
    const keys = Object.keys(object);
    let data: any = {};
    keys.map((key) => {
        if (object[key]) data[key] = object[key];
    });
    return data;
};
