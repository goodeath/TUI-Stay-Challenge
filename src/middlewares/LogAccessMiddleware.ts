export const LogAccessMiddleware = (req: any, res: any, next: any) => {
    const date = new Date();

    console.log(
        `${date.toLocaleDateString(
            'en-US'
        )} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${
            req.method
        } - Acessing ${req.path}`
    );
    next();
};
