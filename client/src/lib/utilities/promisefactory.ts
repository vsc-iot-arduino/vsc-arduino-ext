export default class PromiseFactory<T> {
    createPromise(arg: any): Thenable<T> {
        return new Promise((resolve) => { resolve(arg); });
    }

}