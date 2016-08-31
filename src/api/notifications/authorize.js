export function insert () {
    return {
        authorized: true
    };
}

export function replace () {
    return {
        authorized: false
    };
}

export function remove () {
    return {
        authorized: false
    };
}
