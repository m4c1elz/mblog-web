export function removeEmptyFields<T extends object>(obj: T) {
    Object.keys(obj).forEach(key => {
        if (obj[key as keyof T] === "" || obj[key as keyof T] == null) {
            delete obj[key as keyof T]
        }
    })
}
